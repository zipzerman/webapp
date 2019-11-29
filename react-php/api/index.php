<?php 
 use \Mailjet\Resources;
$type = $_GET['tp']; 
if($type=='signup') signup(); 
elseif($type=='login') login(); 
elseif($type=='feed') feed();
elseif($type=='OrderFeed') OrderFeed(); 
elseif($type=='Checkout') Checkout();
elseif($type=='feedTotal') feedTotal(); 
elseif($type=='feedUpdate') feedUpdate();
elseif($type=='feedDelete') feedDelete(); 
function login() 
{ 
       require 'config.php'; 
       $json = json_decode(file_get_contents('php://input'), true); 
       $username = $json['username']; $password = $json['password']; 
       $userData =''; $query = "select * from users where username='$username' and password='$password'"; 
       $result= $db->query($query);
       $rowCount=$result->num_rows;
             
        if($rowCount>0)
        {
            $userData = $result->fetch_object();
            $user_id=$userData->user_id;
            $userData = json_encode($userData);
            echo '{"userData":'.$userData.'}';

            
        }
        else 
        {
            echo '{"error":"Wrong username and password"}';
        }

    
}
function signup() {
    
        require 'config.php';

              
        $json = json_decode(file_get_contents('php://input'), true);
        $username = $json['username'];
        $password = $json['password'];
        $email = $json['email'];
        $name = $json['name'];

        $username_check = preg_match("/^[A-Za-z0-9_]{4,10}$/i", $username);
        $email_check = preg_match('/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.([a-zA-Z]{2,4})$/i', $email);
        $password_check = preg_match('/^[A-Za-z0-9!@#$%^&*()_]{4,20}$/i', $password);
       
        if($username_check==0) 
            echo '{"error":"Invalid username"}';
        elseif($email_check==0) 
            echo '{"error":"Invalid email"}';
        elseif($password_check ==0) 
            echo '{"error":"Invalid password"}';

        elseif (strlen(trim($username))>0 && strlen(trim($password))>0 && strlen(trim($email))>0 && 
            $email_check>0 && $username_check>0 && $password_check>0)
        {
           

            $userData = '';
            
            $result = $db->query("select * from users where username='$username' or email='$email'");
            $rowCount=$result->num_rows;
            //echo '{"text": "'.$rowCount.'"}';
           
            if($rowCount==0)
            {
                                
                $db->query("INSERT INTO users(username,password,email,name)
                            VALUES('$username','$password','$email','$name')");

                $userData ='';
                $query = "select * from users where username='$username' and password='$password'";
                $result= $db->query($query);
                $userData = $result->fetch_object();
                $user_id=$userData->user_id;
                $userData = json_encode($userData);
                echo '{"userData":'.$userData.'}';
            } 
            else {
               echo '{"error":"username or email exists"}';
            }

        }
        else{
            echo '{"text":"Enter valid data2"}';
        }
   
}


function feed(){
    
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $user_id=$json['user_id'];
    
    $query = "SELECT * FROM feed WHERE user_id=$user_id AND status=1 ORDER BY feed_id ASC LIMIT 10";
    //$query = "SELECT * FROM feed ";
    $result = $db->query($query); 

    $feedData = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $feedData=json_encode($feedData);
    
    echo '{"feedData":'.$feedData.'}';
    
   
}
function OrderFeed(){
    
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $user_id=$json['user_id'];
    
    $query = "SELECT * FROM feed WHERE user_id=$user_id AND status=2;";
    //$query = "SELECT * FROM feed ";
    $result = $db->query($query); 

    $OrderfeedData = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $OrderfeedData=json_encode($OrderfeedData);
    
    echo '{"OrderfeedData":'.$OrderfeedData.'}';
    
   
}


function feedUpdate(){

    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $user_id=$json['user_id'];
    $feed=$json['feed'];
    $price=$json['price'];
    $feedData = '';
    $status=1;
    if($user_id !=0)
    {
        $query = "INSERT INTO feed (feed,user_id,price,status) VALUES ('$feed','$user_id','$price','$status');";
        $db->query($query);   
    }
    
    $query = "SELECT * FROM feed WHERE user_id=$user_id ORDER BY feed_id ASC LIMIT 10";
    $result = $db->query($query); 

    $feedData = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $feedData=json_encode($feedData);
    
    echo '{"feedData":'.$feedData.'}';


}

function feedDelete(){
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $user_id=$json['user_id'];
    $feed_id=$json['feed_id'];
         
    $query = "Delete FROM feed WHERE user_id=$user_id AND feed_id=$feed_id AND status=1;";
    $result = $db->query($query);
    if($result)       
    {        
        echo '{"success":"Feed deleted"}';
    } else{
     
        echo '{"error":"Delete error"}';
    }
       
       
    
}
function feedTotal(){
    
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $user_id=$json['user_id'];
    $Total='';
    $query = "SELECT SUM(price) AS Total FROM feed WHERE user_id=$user_id And status=1;";
    $result = $db->query($query);
    $Total = $result->fetch_object();
    $Total=$Total->Total;
    $Total = json_encode($Total);
    echo '{"Total":'.$Total.'}';
    
   
}
function Checkout(){
    require 'vendor/autoload.php';
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $user=$json['user_id'];
    $email=$json['email'];
    $name=$json['name'];
    $query ="UPDATE feed SET date=CURDATE(),time=CURTIME(),status=2 WHERE user_id=$user AND status=1;";
    $result = $db->query($query);
    $mj = new \Mailjet\Client('898278dd4d3a9ea4d2bc9eda6439414d','cb6e505cde49d3e21afad0275ecd8a6e',true,['version' => 'v3.1']);
    $body = [
        'Messages' => [
        [
            'From' => [
            'Email' => "6022791659@g.siit.tu.ac.th",
            'Name' => "Krittiya"
            ],
            'To' => [
            [
                'Email' => $email,
                'Name' => $name
            ]
            ],
            'Subject' => "Thank you for shopping with us.",
            'TextPart' => "My first Mailjet email",
            'HTMLPart' => "<h3>Dear $name</h3><br/><h3>Thank you for shopping with us.</h3>",
            'CustomID' => "AppGettingStartedTest"
        ]
        ]
    ];
    $response = $mj->post(Resources::$Email, ['body' => $body]);
    $response->success() && var_dump($response->getData());

    if($result)
    {        
        echo '{"success":"Order Successfully"}';
    } else{
    
        echo '{"error":"Something Wrong !!!"}';
        
    }

}







?>