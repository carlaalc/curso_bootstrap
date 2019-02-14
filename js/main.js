/*o modal aparece e desaparece*/
setTimeout(function(){
	$("#cadastro_modal").modal("show");
}, 1000);
setTimeout(function(){
	$("#cadastro_modal").modal("hide");
}, 10000);
/*o modal terá um formulário*/
/*troca ler mais para ler menos*/
$('#vendas_collapse').on('show.bs.collapse', function () {
  $('a[href="#vendas_collapse"]').text("Ver menos")
})
$('#vendas_collapse').on('hidden.bs.collapse', function () {
  $('a[href="#vendas_collapse"]').text("Ver mais")
})