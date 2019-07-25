<?php snippet('header') ?>


<div data-barba="wrapper">
<main data-barba="container" data-barba-namespace="about">
  <!-- <header class="intro">
    <h1><?= $page->title() ?></h1>
  </header> -->


  <div class="marquee marquee_top">
      <span>Amos Abel Yong</span>
      <span>Amos Abel Yong</span>
      <span>Amos Abel Yong</span>
      <span>Amos Abel Yong</span>
      <span>Amos Abel Yong</span>
      <span>Amos Abel Yong</span>
      <span>Amos Abel Yong</span>
  </div>


  <div class="marquee marquee_left">
      <span>Amos Abel Yong</span>
      <span>Amos Abel Yong</span>
      <span>Amos Abel Yong</span>
      <span>Amos Abel Yong</span>
      <span>Amos Abel Yong</span>
      <span>Amos Abel Yong</span>
      <span>Amos Abel Yong</span>
  </div>

  <div class="marquee marquee_right">
      <span>Amos Abel Yong</span>
      <span>Amos Abel Yong</span>
      <span>Amos Abel Yong</span>
      <span>Amos Abel Yong</span>
      <span>Amos Abel Yong</span>
      <span>Amos Abel Yong</span>
      <span>Amos Abel Yong</span>
  </div>


  <div class="wrap_about">
    <div class="text">
      <?= $page->text()->kt() ?>
    </div>

    <div class="text">
      <?= $page->text2()->kt() ?>
    </div>
  </div>

  <div class="wrap_instagram">
    <ul id="instafeed">
    </ul>
  </div>

  <div class="instagram_clicker"></div>

</main>

</div>
<?php snippet('footer') ?>
