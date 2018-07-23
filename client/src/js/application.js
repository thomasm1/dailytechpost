var $input = $('<div class="modal-body"><input type="text" class="form-control" placeholder="Message"></div>')

$(document).on('click', '.js-msgGroup', function () {
  $('.js-msgGroup, .js-newMsg').addClass('hidden-xs-up')
  $('.js-conversation').removeClass('hidden-xs-up')
  $('.modal-title').html('<a href="#" class="js-gotoMsgs">Back</a>')
  $input.insertBefore('.js-modalBody')
})

$(function () {
  function getRight() {
    if (!$('[data-toggle="popover"]').length) return 0
    return ($(window).width() - ($('[data-toggle="popover"]').offset().left + $('[data-toggle="popover"]').outerWidth()))
  }

  $(window).on('resize', function () {
    var instance = $('[data-toggle="popover"]').data('bs.popover')
    if (instance) {
      instance.config.viewport.padding = getRight()
    }
  })

  $('[data-toggle="popover"]').popover({
    template: '<div class="popover" role="tooltip"><div class="popover-content px-0"></div></div>',
    title: '',
    html: true,
    trigger: 'manual',
    placement:'bottom',
    viewport: {
      selector: 'body',
      padding: getRight()
    },
    content: function () {
      var $nav = $('#js-popoverContent').clone()
      return '<ul class="nav nav-pills nav-stacked flex-column" style="width: 120px">' + $nav.html() + '</ul>'
    }
  })

  $('[data-toggle="popover"]').on('click', function (e) {
    e.stopPropagation()

    if ($($('[data-toggle="popover"]').data('bs.popover').getTipElement()).hasClass('in')) {
      $('[data-toggle="popover"]').popover('hide')
      $(document).off('click.app.popover')

    } else {
      $('[data-toggle="popover"]').popover('show')

      setTimeout(function () {
        $(document).one('click.app.popover', function () {
          $('[data-toggle="popover"]').popover('hide')
        })
      }, 1)
    }
  })

})

$(document).on('click', '.js-gotoMsgs', function () {
  $input.remove()
  $('.js-conversation').addClass('hidden-xs-up')
  $('.js-msgGroup, .js-newMsg').removeClass('hidden-xs-up')
  $('.modal-title').html('Messages')
})

$(document).on('click', '[data-action=growl]', function (e) {
  e.preventDefault()

  $('#app-growl').append(
    '<div class="alert alert-dark alert-dismissible fade show" role="alert">'+
      '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
        '<span aria-hidden="true">×</span>'+
      '</button>'+
      'Click the x on the upper right to dismiss this little thing. Or click growl again to show more growls'+
    '</div>'
  )
})

$(document).on('focus', '[data-action="grow"]', function () {
  if ($(window).width() > 1000) {
    $(this).animate({
      width: 300
    })
  }
})

$(document).on('blur', '[data-action="grow"]', function () {
  if ($(window).width() > 1000) {
    var $this = $(this).animate({
      width: 180
    })
  }
})

// back to top button - docs
$(function () {
  if ($('.docs-top').length) {
    _backToTopButton()
    $(window).on('scroll', _backToTopButton)
    function _backToTopButton () {
      if ($(window).scrollTop() > $(window).height()) {
        $('.docs-top').fadeIn()
      } else {
        $('.docs-top').fadeOut()
      }
    }
  }
})

$(function () {
    // doc nav js
    var $toc = $('#markdown-toc')
    $('#markdown-toc li').addClass('nav-item')
    $('#markdown-toc li > a').addClass('nav-link')
    var $window = $(window)

    if ($toc[0]) {

      maybeActivateDocNavigation()
      $window.on('resize', maybeActivateDocNavigation)

      function maybeActivateDocNavigation () {
        if ($window.width() > 768) {
          activateDocNavigation()
        } else {
          deactivateDocNavigation()
        }
      }

      function deactivateDocNavigation() {
        $window.off('resize.theme.nav')
        $window.off('scroll.theme.nav')
        $toc.css({
          position: '',
          left: '',
          top: ''
        })
      }

      function activateDocNavigation() {

        var cache = {}

        function updateCache() {
          cache.containerTop   = $('.docs-content').offset().top - 40
          cache.containerRight = $('.docs-content').offset().left + $('.docs-content').width() + 45
          measure()
        }

        function measure() {
          var scrollTop = $window.scrollTop()
          var distance =  Math.max(scrollTop - cache.containerTop, 0)

          if (!distance) {
            $($toc.find('li a')[1]).addClass('active')
            return $toc.css({
              position: '',
              left: '',
              top: ''
            })
          }

          $toc.css({
            position: 'fixed',
            left: cache.containerRight,
            top: 40
          })
        }

        updateCache()

        $(window)
          .on('resize.theme.nav', updateCache)
          .on('scroll.theme.nav', measure)

        $('body').scrollspy({
          target: '#markdown-toc',
          children: 'li > a'
        })

        setTimeout(function () {
          $('body').scrollspy('refresh')
        }, 1000)
      }
    }
});





// map 
function d3 () {
      function draw(geo_data) {
        "use strict";
        var margin = 75,
            width = 1000 - margin,
            height = 600 - margin;

        d3.select("#div5")
          .append("h2")
          .text("1930 - 2014");
          
          d3.select("body").transition()
              .duration(3000)
              .delay(100)
              .style("background-color", "silver");
           
        var svg = d3.select("#div5")
            .append("svg")
            .attr("width", width + margin)
            .attr("height", height + margin)
            .append('g')
            .attr('class', 'map');

        var years = [];

          for(var i = 1930; i < 2015; i += 4) {
            if(i !== 1942 && i !== 1946) {
              years.push(i);
            };
          }

        var projection = d3.geo.mercator()
                               .scale(140)
                               .translate([width / 2, height / 1.2]);

        var path = d3.geo.path().projection(projection);
        var map = svg.selectAll('path')
                     .data(geo_data.features)
                     .enter()
                     .append('path')
                     .attr('d', path)
                     .style('fill', 'lightBlue')
                     .style('stroke', 'black')
                     .style('stroke-width', 0.5);
        function plot_points(data) {
            function agg_year(leaves) {
                var total = d3.sum(leaves, function(d) {
                    return d['attendance'];
                });
                var coords = leaves.map(function(d) {
                    return projection([+d.long, +d.lat]);
                });
                var center_x = d3.mean(coords, function(d) {
                    return d[0];
                });
                var center_y = d3.mean(coords, function(d) {
                    return d[1];
                });
                var teams = d3.set();
                leaves.forEach(function(d) {
                    teams.add(d['team1']);
                    teams.add(d['team2']);
                });
                return {
                  'attendance' : total,
                  'x' : center_x,
                  'y' : center_y,
                  'teams' : teams.values()
                };
            }
            var nested = d3.nest()
                           .key(function(d) {
                              return d['date'].getUTCFullYear();
                           })
                           .rollup(agg_year)
                           .entries(data);

            var attendance_max = d3.max(nested, function(d) {
                return d.values['attendance'];
            });
            var radius = d3.scale.sqrt()
                           .domain([0, attendance_max])
                           .range([0, 15]);

            function key_func(d) {
                return d['key'];
            }
            svg.append('g')
               .attr("class", "bubble")
               .selectAll("circle")
               .data(nested.sort(function(a, b) { 
                  return b.values['attendance'] - a.values['attendance'];
               }), key_func)
               .enter()
               .append("circle")
               .attr('cx', function(d) { return d.values['x']; })
               .attr('cy', function(d) { return d.values['y']; })
               .attr('r', function(d) {
                    return radius(d.values['attendance']);
               })
          function update(year) {
              var filtered = nested.filter(function(d) {
                  return new Date(d['key']).getUTCFullYear() === year;
              });
              d3.select("h2")   
                    .text("World Cup " + year )
					.style('border', 'solid 1px darkslateblue')
					.style('padding', '2px');
              var circles = svg.selectAll('circle')
                               .data(filtered, key_func);
              circles.exit().remove();
			  
              circles.enter()
                     .append("circle")
                     .transition()
                     .duration(500)
                     .attr('cx', function(d) { return d.values['x']; })
                     .attr('cy', function(d) { return d.values['y']; })
                     .attr('r', function(d) {
                        return radius(d.values['attendance']);
                     });

              var countries = filtered[0].values['teams'];
              function update_countries(d) {
                  if(countries.indexOf(d.properties.name) !== -1) {
                      return "lightBlue";
                  } else {
                      return '#e4e6e5';
                  }
              }
              svg.selectAll('path')
                 .transition()
                 .duration(500)
                 .style('fill', update_countries)
                 .style('stroke', update_countries);

          }
          var year_idx = 0;
          var year_interval = setInterval(function() {
            update(years[year_idx]);
            year_idx++;
            if(year_idx >= years.length) {
                clearInterval(year_interval);
                var buttons = d3.select("body")
                        .append("div")
                        .attr("class", "years_buttons")
                        .selectAll("div")
                        .data(years)
                        .enter()
                        .append("div")
                        .text(function(d) {
                            return d;
                        });

                buttons.on("click", function(d) {
                    d3.select(".years_buttons")
                      .selectAll("div")
                      .transition()
                      .duration(200)
                      .style("color", "white")
                      .style("background", "grey");

                    d3.select(this)
                      .transition()
                      .duration(200)
                      .style("background", "lightBlue")
                      .style("color", "darkslateblue")
                      .style("border", "solid 1px darkslateblue");
                    update(d);
                });
            }
          }, 400);
      }

      var format = d3.time.format("%d-%m-%Y (%H:%M h)");

      d3.tsv("world_cup_geo.tsv", function(d) {
        d['attendance'] = +d['attendance'];
        d['date'] = format.parse(d['date']);
        return d;
      }, plot_points);
    };
    }
/*
var samantha = document.getElementById("samantha");
samantha.addEventListener("click", function() {
  var
}
*/

 

