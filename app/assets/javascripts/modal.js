
var mo_str = '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\n  <div class="modal-dialog" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n        <h4 class="modal-title" id="myModalLabel">Modal title</h4>\n      </div>\n      <div class="modal-body">\n\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n        <button type="button" class="btn btn-primary">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>';

var items = [
  {name:"yes123",amount:2,price:200},
  {name:"yes123",amount:2,price:200},
  {name:"yes123",amount:2,price:200},
];

jQuery(function(){
//   var m = jQuery(modal);
//   m.appendTo('body');
//   m.modal('toggle');
  jQuery(mo_str).appendTo('body');
  console.log(jQuery("#myModal").length);
  for(var i = 0; i < 5; i++)
    jQuery('<p></p>').text('This is ' + i).appendTo('article.first');

  jQuery('<p></p>').text('This is ~~~~~').insertBefore('article.first');

  var it,ie;
  function item_click(){
    jQuery(this).toggleClass('g');
  }
  for (var ik in items) {
    console.log(ie);
    ie = items[ik];
    it = jQuery('<button class="btn btn-primary btn-lg">'+ie.name+' >> '+ie.amount+" | "+ie.price+'$</button>');
    it.click(item_click);
    it.appendTo('.modal-body');
    jQuery('<br />').appendTo('.modal-body');
  }

  var total = _.reduce(_.map(items,function(e){
    return e.amount * e.price;
  }),function(s,n){
    return s + n;
  },0);
  jQuery('.modal .modal-footer .btn-primary').text("Total: " + total);

  jQuery('#b').click(function(){
    jQuery('.kkk').toggle(300);
    jQuery('.first').toggleClass('g');
    jQuery('#myModal').modal('show');
  });
  jQuery(window).keyup(function(e){
    console.log(e.which);
    if(e.which === 13) alert("horay!!!!");
  });

  var $input = jQuery('#inputsomething');
  jQuery('#to-submit').click(function(e){
    var v = $input.val();
    if(v.match(/\w{3,}/))
      jQuery('<p>'+v+'</p>').appendTo('body');
    else
      alert('You must input more than three character!');

    console.log(v);
  });
});
