function padThread(){
  var toPad = $(".idc-thread").filter(function() {
    var $this = $(this);
    return $this.css("width") < "300px"
  });

  toPad.each(function () {
    this.style.setProperty( 'padding-left', '0px', 'important' );
  });
}

id_add_action('thread_page_load', function(pageObj) {
    padThread();
    padThread();
})
