<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>お問い合わせ</title>
</head>
<body>
  <h1>お問い合わせ</h1>
    <div class="contact-box">
        <form action="contact-send.php" method="POST">
            <div class="form-item">
                <label for="name">お名前</label>
                <input type="text" id="name" name="username" required>
            </div>
            
            <div class="form-item">
                <label for="email">メールアドレス</label>
                <input type="email" id="email" name="useremail" required>
            </div>
            
            <div class="form-item">
                <label for="message">お問い合わせ内容</label>
                <textarea id="message" name="usermessage" rows="6" required></textarea>
            </div>
            
            <div class="form-submit">
                <button type="submit">送信する</button>
            </div>
        </form>
    </div>
</html>