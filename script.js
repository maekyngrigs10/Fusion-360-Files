$(".f1").click(function(){
    $(".f1f").show();
	$(".f2").hide();
    $(".f3").hide();
    $(".f1").hide();
});

$(".f2").click(function(){
    $(".f2f").show();
	$(".f2").hide();
    $(".f3").hide();
    $(".f1").hide();
});
$(".f3").click(function(){
    $(".f3f").show();
	$(".f2").hide();
    $(".f3").hide();
    $(".f1").hide();
});
    

$(".f1").mousedown(function(event){
    switch(event.which){
    case 3:
    alert('contents:3 files (CAD) (Drawings) (Pictures)');
    break;
    }
});
$(".f2").mousedown(function(event){
    switch(event.which){
    case 3:
    alert('contents: 2 files (CAD) (Drawings)');
    break;
    }
});
$(".f3").mousedown(function(event){
    switch(event.which){
    case 3:
    alert('contents:2 files (Drawings) (Pictures)');
    break;
    }
});


