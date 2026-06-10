<footer>
  <!-- rogo -->
  <div class="D-footer-logo">
    <a class="logo" href="#">
      Château du Silence
    </a>
  </div>
  <!-- sns link -->



  <!-- 呼び出し元からの相対だからバグる   こまったーーーーー -->
   <!-- indexphpでifつくるしかないか -->



   <!-- とりあえず呼び出し元検知 -->
<?php
$yobidasiPHP = $_SERVER['SCRIPT_NAME'];
// echo $yobidasiPHP;
// じょうけん
if (str_ends_with($yobidasiPHP, 'index.php')){
  $inst_pass = 'images/index/SNSアイコン/instagram.svg';
  $x_pass = 'images/index/SNSアイコン/x.svg';
  $reddit_pass = 'images/index/SNSアイコン/reddit.svg';
}else{
  $inst_pass = '../../images/index/SNSアイコン/instagram.svg';
  $x_pass = '../../images/index/SNSアイコン/x.svg';
  $reddit_pass = '../../images/index/SNSアイコン/reddit.svg';
}
?>

<!-- きたー! -->



  <div class="D-footer-SNS">
    <ul>
      <li>
        <a href="">
          <img src="<?php echo $inst_pass ?>" alt="">
        </a>
      </li>
      <li>
        <a href="">
          <img src="<?php echo $x_pass ?>" alt="">
        </a>
      </li>
      <li>
        <a href="">
          <img src="<?php echo $reddit_pass ?>" alt="">
        </a>
      </li>
    </ul>
  </div>
  <!-- コピーライト -->
  <div class="D-copyright">
   &copy; 2023-2026 Château du Silence
  </div>
  <div class="D-copyright"></div>

</footer>