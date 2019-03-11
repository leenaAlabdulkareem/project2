/*
  Please add all Javascript code to this file.
*/

//I want to show my users live top and breaking news headlines
$("#breakingNews").on('click', function(){
var url1 = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=61078bf91b0b4f99b2bac9d769340140';
var req = new Request(url1);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    }).then(function(res){
      console.log(res)
    })

    $('#popup').on('click',function(){
      $("#popUp").removeClass("hidden").removeClass("loader")
      $("article").hide();
        });
  
    $('.closePopUp').on('click',function(){
      $('#popUp').addClass('hidden')       
      $("article").show();
    });

            $("#popUp").append(pop)
  });




// If you want headlines just from a specific source, for example BBC News,
$("#headlines").on('click', function(){
 var url2= 'https://newsapi.org/v2/top-headlines?' +
 'sources=bbc-news&' +
     'apiKey=61078bf91b0b4f99b2bac9d769340140';
  var req = new Request(url2);
    fetch(req)
    .then(function(response) {
     console.log(response.json());
        })

        $('#popup').on('click',function(){
          $("#popUp").removeClass("hidden").removeClass("loader")
          $("article").hide();
            });
      
        $('.closePopUp').on('click',function(){
          $('#popUp').addClass('hidden')       
          $("article").show();
        });
    
                $("#popUp").append(pop)
      });




    //I want to search for news articles that mention a specific topic or keyword
    $("#searchfornews").on('click', function(){
    var url3 = 'https://newsapi.org/v2/everything?' +'q=Apple&' +
    'from=2019-03-05&' +'sortBy=popularity&' +
    'apiKey=61078bf91b0b4f99b2bac9d769340140';

    var req = new Request(url3);

    fetch(req)
    .then(function(response) {
      console.log(response.json());
    })
$('#popup').on('click',function(){
      $("#popUp").removeClass("hidden").removeClass("loader")
      $("article").hide();
        });
  
    $('.closePopUp').on('click',function(){
      $('#popUp').addClass('hidden')       
      $("article").show();
    });

            $("#popUp").append(pop)
    
  });

   
