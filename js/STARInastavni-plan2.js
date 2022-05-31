$(() => {
  $("#txtSubject").autocomplete({
    source: "http://www.fulek.com/VUA/SUPIT/GetNastavniPlan",
    autoFocus: true,
    Delay: 500,
    focus: (e, ui) => {
      e.preventDefault();
      $("#txtSubject").val(ui.item.label);
    },
    select: (e, ui) => {
      e.preventDefault();
      const id = ui.item.value;
      showSubjectDetails(id);
      $("#txtSubject").val(ui.item.label);
    },
  });
  // $('.ispis').dialog({
  //   buttons: [
  //     {
  //       text: 'obriši',
  //       click: () => {
  //         $('.ispis').dialog('delete');
  //         $('#txtSubject').val('').focus();
  //       },
  //     },
  //   ],
  // });
});

function showSubjectDetails(id) {
  $.ajax({
    url: "http://www.fulek.com/VUA/supit/GetKolegij",
    data: { id },
    success: (data) => {
      const { kolegij, ects, sati, predavanja, vjezbe, tip, semestar } = data;
      $(".ispis").dialog({
        title: kolegij,
      });
      $("#ects").text(ects);
      $("#sati").text(sati);
      $("#predavanja").text(predavanja);
      $("#vjezbe").text(vjezbe);
      $("#tip").text(tip);
      $("#semestar").text(semestar);

      $(".ispis").dialog("open");
      $("#tablica td:last").after("<td>#ects</td><td>ecs</td>");
    },
  });
}
