<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>MBTI Results</title>
    <link rel="stylesheet" href="styleRes.css">
  </head>
  <body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
    <div class="blog-card">
      <input type="radio" name="select" id="tap-1" checked>
      <!-- <input type="radio" name="select" id="tap-2">
      <input type="radio" name="select" id="tap-3"> -->
      <input type="checkbox" id="imgTap">
      <!-- <div class="sliders">
        <label for="tap-1" class="tap tap-1"></label>
        <label for="tap-2" class="tap tap-2"></label>
        <label for="tap-3" class="tap tap-3"></label>
      </div> -->
      <div class="inner-part">
        <label for="imgTap" class="img">
          <canvas id="myChart"></canvas>
        </label>
        <div class="content content-1">
          <span>Your personality type is</span>
          <div class="title"><?php echo $idPerso; ?></div>
          <div class="text"><?php echo $descripPerso; ?></div>
          <button onclick="LoadWikiPHP()">Read more</button>
        </div>
      </div>
      <!-- <div class="inner-part">
        <label for="imgTap" class="img">
          <img class="img-2" src="profile-2.jpg">
        </label>
        <div class="content content-2">
          <span>26 December 2018</span>
          <div class="title">Lorem Ipsum Dolor</div>
          <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum eos ut consectetur numquam ullam fuga animi laudantium nobis rem molestias.</div>
          <button>Read more</button>
        </div>
      </div>
      <div class="inner-part">
        <label for="imgTap" class="img">
          <img class="img-3" src="profile-3.jpg">
        </label>
        <div class="content content-3">
          <span>26 December 2019</span>
          <div class="title">Lorem Ipsum Dolor</div>
          <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod excepturi nemo commodi sint eum ipsam odit atque aliquam officia impedit.</div>
          <button>Read more</button>
        </div>
      </div> -->
    </div>
    <script>
      var ctx = document.getElementById('myChart').getContext('2d');
  var data = {
    labels: ["Extroversion/Introversion", "Sensing/Intuition", "Thinking/Feeling", "Judging/Perceiving"],
    datasets: [{
        label: "E, S, T, J",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 2,
        data: [<?php echo -$E; ?>, <?php echo -$S; ?>, <?php echo -$T; ?>, <?php echo -$J; ?>],
      }, {
        label: "I, N, F, P",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
        data: [<?php echo 100 - $E; ?>, <?php echo 100 - $S; ?>, <?php echo 100 - $T; ?>, <?php echo 100 - $J; ?>],
      },
  
    ]
  };
  
  var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: data,
    options: {
      scales: {
        yAxes: [{
          stacked: true
        }],
        xAxes: [{
          ticks: {
             callback: function(value, index, values) {
              return Math.abs(value);
            }
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItems, data) {
            return data.datasets[tooltipItems.datasetIndex].label  + ": " +  Math.abs(tooltipItems.xLabel);
          }
        }
      }
    }
  });
  </script>
  <script>
        function LoadWikiPHP(){
            var urlToOpen = "<?php echo $linkVar; ?>";
            window.open(urlToOpen, '_blank');
        }
    </script>
  </body>
</html>
