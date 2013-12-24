$(document).ready(function() {
  var oTable = $('#tblCandidates').dataTable({
    "oLanguage": {
      "sSearch": "Cari berdasarkan nama"
    },
    "aoColumnDefs": [
      {"bSearchable": false, "aTargets": [0,2,3,4,5]}
    ]
  })
  .columnFilter({
    "aoColumns": [
      {"type": "select", "sSelector": "#sLembaga"},
      null,
      {"type": "select", "sSelector": "#sJenisKelamin"},
      {"type": "select", "sSelector": "#sDapil"},
      {"type": "select", "sSelector": "#sProvinsi"},
      {"type": "select", "sSelector": "#sPartai"}
    ]
  });

  // When DPD is chosen, Dapil and Partai should be disabled
  // When DPR is chosen, all the filters should be enable
  $('#sLembaga select').change(function() {
    if(this.value == 'DPD') {
      // Reset select
      $('#sDapil select').find('option:first-child').prop('selected', true);
      $('#sPartai select').find('option:first-child').prop('selected', true);

      // Reset filter
      oTable.fnFilter(unescape(''), 3, true, false);
      oTable.fnFilter(unescape(''), 5, true, false);

      // Disable Dapil and Partai
      $('#sDapil select').attr("disabled", "disabled");
      $('#sPartai select').attr("disabled", "disabled");

    } else {
      $('.forms').find(':disabled').each(function() {
        $(this).removeAttr("disabled");
      });
    }
  });

  $('#btnReset').click(function() {
    oTable.fnFilter(unescape(''), 0, true, false);
    oTable.fnFilter(unescape(''), 2, true, false);
    oTable.fnFilter(unescape(''), 3, true, false);
    oTable.fnFilter(unescape(''), 4, true, false);
    oTable.fnFilter(unescape(''), 5, true, false);
  });
});
