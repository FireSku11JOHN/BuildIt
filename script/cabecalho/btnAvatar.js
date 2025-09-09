export function abrirOpcoesAvatar(){
    $("#btn-avatar").click(function() {
        const modal = $("#modal-perfil");
        if(modal.is(":visible")) {
            modal.hide(); // esconde
        } else {
            modal.css("display", "flex"); // mostra como flex
        }
    });
}