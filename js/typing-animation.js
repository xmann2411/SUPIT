$(document).ready(() => {
  const text = "Budi izvrstan u onome što vidiš";
  const textNew = "voliš!\n";
  const purpleText = "ZAISKRI.";
  
  let i = 0;

  const typer = () => {
    $("#insert-text").append(
      // `<span style="color: white;font-weight: bold;">${text[i]}</span>`
      `${text[i]}`
    );
    i++;
    if (i < text.length + 1) {
      setTimeout(typer, 300);
    } else {
      typer1(); 
    };
  };
  const typer1 = () => {
    i--;
    let text1 = text.substring(0, i);
    // $("#insert-text").html(`<span style="color: white;font-weight: bold;">${text1}</span>`);
    $("#insert-text").html(`${text1}`);
    if (i > 26) {
      setTimeout(typer1, 300)
    }else{
      i = 0;
      typer2();
    }
  };
  const typer2 = () => {
    $("#insert-text").append(
      // `<span style="color: white;font-weight: bold;">${textNew[i]}</span>`
      `${textNew[i]}`
      );
      i++;
      if (i < textNew.length) {
        setTimeout(typer2, 300);
      } else {
        i = 0;
        $("#insert-text").append('<br>');
        typer3(); 
    };
  };
  i = 0;
  const typer3 = () => {
    $("#insert-text").append(
      // `<span style="color: maroon;font-weight: bold;">${purpleText[i]}</span>`
      `<span style="color: maroon">${purpleText[i]}</span>`
    );
    i++;
    if (i < purpleText.length) {
      setTimeout(typer3, 300);
    }
  };
  typer();

});

