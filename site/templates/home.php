<?php snippet('header') ?>

<div id="wrapper">
	<section id="manifesto">
		<div class="inner">
			<?= $page->text()->kt() ?>
		</div>
	</section>
	<section id="issue">
		<div class="inner">
			<div class="issue-stage">
				<div class="issue-model">
					<div class="sizer">
						<img src="<?= thumb($page->issuefront()->toFile(), array('width' => 500))->url() ?>" width="100%">
					</div>
					<div class="frontpage">
						<img src="<?= thumb($page->issuefront()->toFile(), array('width' => 500))->url() ?>" width="100%">
					</div>
					<div class="backpage">
						<img src="<?= thumb($page->issueback()->toFile(), array('width' => 500))->url() ?>" width="100%">
					</div>
				</div>
			</div>
		</div>
	</section>
	<section id="overview">
		<?php foreach ($page->gallery()->toStructure() as $key => $image): ?>
		<?php $image = $image->toFile();
			  $srcset = '';
			  for ($i = 500; $i <= 2000; $i += 500) $srcset .= resizeOnDemand($image, $i) . ' ' . $i . 'w,';
		?>
		<div class="slide">
			<img 
			src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" 
			data-src="<?= resizeOnDemand($image, 1000) ?>" 
			data-srcset="<?= $srcset ?>" 
			data-sizes="auto" 
			data-optimumx="1.5" 
			class="lazyimg lazyload lazypreload <?= $image->imageposition() ?>" 
			height="100%" width="auto">
			<noscript>
				<img src="<?= resizeOnDemand($image, 1500) ?>" height="100%" width="auto" />
			</noscript>
		</div>
		<?php endforeach ?>
	</section>
</div>

<div id="contributors">
	<?= $page->contributors()->kt() ?>
</div>

<div id="buy">
	<a href="<?= $page->buylink()->html() ?>" target="_blank" rel="nofollow">
		<div class="inner">to<br>buy<br>online<br>click<br>here</div>
	</a>
</div>
<div id="filter-overlay"></div>
<div id="stockists"><?= $page->stockists()->kt() ?></div>
<div id="contact">
<?= $page->contact()->kt() ?>
<p>© <?= date('Y') ?>, All rights reserved <?= $site->title()->html() ?>
<br>Website: DESIGN + CODE = <a href="http://www.httb.eu" target="_blank">HTTB.EU</a></p>
</div>

<?php snippet('footer') ?>