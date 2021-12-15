<?php

const DB_PATH = __DIR__.'/../../registrations.db';
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');

if (isset($_POST['email']) && $_POST['email']) {
    $email = trim($_POST['email']);
    $email = strtolower($email);
    $email = SQLite3::escapeString($email);

    if ($email) {
        $created_at = time();

        $db = new SQLite3(DB_PATH);
        $db->exec("CREATE TABLE registrations(id INTEGER PRIMARY KEY, email VARCHAR(255), created_at INTEGER)");
        $db->exec("INSERT INTO registrations(email, created_at) VALUES('{$email}', {$created_at})");

        echo json_encode(['success' => true]);
        die();
    }
}

echo json_encode(['success' => false]);

