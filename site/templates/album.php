<?php snippet('header') ?>

<main class="wrap_single_project">

  <div class="marquee marquee_top">
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
  </div>


  <div class="marquee marquee_left">
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
  </div>

  <div class="marquee marquee_right">
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
  </div>


  <div class="single_project_images">

    <ul class=""<?= attr(['data-count' => $gallery->count()], ' ') ?>>
      <?php foreach ($gallery as $image): ?>
      <li>
          <?= $image ?>
      </li>
      <?php endforeach ?>
      <li class="next_project"> 

        <?php if($next = $page->next()): ?>

          <img  src="<?php echo $page->next()->image()->url() ?>">
        <a href="<?= $next->url() ?>">
          Next Project<br>
          <?= $next->title() ?>
        </a>
        <?php else: ?>
          <a href="<?= page('projects')->children()->first()->url() ?>">
            Next Projectx<br>
            <?= page('projects')->children()->first()->title() ?>
          </a>
        <?php endif ?>


      </li>
    </ul>

  </div>

</main>

<?php snippet('footer') ?>
