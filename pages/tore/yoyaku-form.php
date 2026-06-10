<?php


// 今の時間
date_default_timezone_set('Asia/Tokyo')


// 今日の日+1 +2 +3 .... 



?>
<link rel="stylesheet" href="yoyaku-form.css">
<!-- 予約フォーム -->
<section class="yoyaku-form">
  <h2>入場日時指定 整理券のご予約</h2>
  <form action="">
  
    <!-- 日付選択 -->
    <div class="day-select">
      <label for="">1 ご来館日の指定</label>
      <select name="day" id="day">
        <option value="">選択してください</option>
        <!-- 一週間文ループ -->
         <?php
         for ($week_hensuu = 0; $week_hensuu < 7; $week_hensuu++ ){
          // kokkara候補出力ループ
           $output_day = new DateTime("+{$week_hensuu} day");
          //  SQL用 日付に変換
           $value = $output_day->format('Y-m-d');
          //  呼び出すやつ
           echo '<option value="' . $value . '">' . $value . '</option>';
         }
         
         
         ?>
      </select>
  
    </div>
  
    <div class="time-select">
      <label for="">2 入場時間枠</label>
      <select name="" id=""></select>
    </div>
  
    <div class="ticket-select">
      <label for="">3 チケット枚数の内訳</label>
      <select name="" id=""></select>
    </div>
  
    <div class="name-input">
      <label for="">代表者様のお名前</label>
      <input type="text">
    </div>
  
    <div class="email-input">
      <label for="">Emailアドレス</label>
      <input type="text">
    </div>
  
    <div class="phone-input">
      <label for="">ご連絡先番号</label>
      <input type="text">
    </div>
  
  
  </form>
</section>