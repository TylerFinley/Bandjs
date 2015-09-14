$(document).ready(function() {
  $("#add-member").click(function() {
    $("#new-band-members").append('<div class="new-band-member">' +
                          '<div class="form_group">'+
                          '<label for="member">Member name</label>' +
                          '<input type="text" class="form-control member">' +
                          '</div>' +
                          '<div class="form-group">' +
                          '<label for="talent"> Talent:</label>' +
                          '<input type="text" class="form-control talent">' +
                          '</div>' +
                          '</div>');

    });

    $("form#new-band").submit(function(event) {
      event.preventDefault();

      var inputtedBandName = $("input#new-band-name").val();
      var inputtedHometown = $("input#band-hometown").val();
      var inputtedBandGenre = $("input#band-genre").val();
      var inputtedBandManager = $("input#band-manager").val();

      var newBand = { bandName: inputtedBandName,
                      hometown: inputtedHometown,
                      genre: inputtedBandGenre,
                      manager: inputtedBandManager,
                      members: [] };

    $(".new-band-member").each(function() {
      var inputtedMemberName = $(this).find("input.member").val();
      var inputtedTalent = $(this).find("input.talent").val();

      var newBandMember = { memberName: inputtedMemberName,
                            talent: inputtedTalent };
          newBand.members.push(newBandMember);
      });

      $("ul#bands").append("<li><span class='band'>" + newBand.bandName + "</span></li>");

      $(".band").last().click(function() {
        $("#show-band").show();

        $("#show-band h2").text(newBand.bandName);
        $(".new-band-name").text(newBand.bandName);
        $(".hometown").text(newBand.hometown);
        $(".genre").text(newBand.genre);
        $(".manager").text(newBand.manager);

        $("ul#members").text("");
        newBand.members.forEach(function(member) {
          $("ul#members").append("<li>" + member.memberName + ", " + member.talent + "</li>");
        });
      });

    $("input#new-band-name").val("");
    $("input#band-hometown").val("");
    $("input#band-genre").val("");
    $("input#band-manager").val("");
    $("input.member").val("");
    $("input.talent").val("");

  });
});
