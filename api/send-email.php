<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request data']);
    exit;
}

// Validate required fields
$required_fields = ['name', 'email', 'message'];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "$field is required"]);
        exit;
    }
}

// Composer autoloader
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Create a new PHPMailer instance
try {
    $mail = new PHPMailer(true);

    // Server settings
    $mail->isSMTP();
    $mail->Host = 'mail.modernarchitecturebd.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'admin@modernarchitecturebd.com';
    $mail->Password = '[!cRin%vANa4';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    // Recipients
    $mail->setFrom('admin@modernarchitecturebd.com', 'Modern Architecture Contact Form');
    $mail->addAddress('info@modernarchitecturebd.com');
    $mail->addReplyTo($data['email'], $data['name']);

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission';
    
    // Create HTML message
    $message = "<h2>New Contact Form Submission</h2>";
    $message .= "<p><strong>Name:</strong> " . htmlspecialchars($data['name']) . "</p>";
    $message .= "<p><strong>Email:</strong> " . htmlspecialchars($data['email']) . "</p>";
    if (!empty($data['phone'])) {
        $message .= "<p><strong>Phone:</strong> " . htmlspecialchars($data['phone']) . "</p>";
    }
    $message .= "<p><strong>Message:</strong></p>";
    $message .= "<p>" . nl2br(htmlspecialchars($data['message'])) . "</p>";

    $mail->Body = $message;
    $mail->AltBody = strip_tags(str_replace(['<br>', '</p>'], "\n", $message));

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo]);
}