require([
    'jquery',
    'splunkjs/mvc/simplexml/ready!'
], function($){
        $('#refresh').on("click",function(){
                setTimeout("location.reload();", 0);
        });
});
