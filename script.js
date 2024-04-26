var a = {
  mobiles: {
      Samsung: {
          SamsungA10: {
              name: "Samsung A10",
              ram: "4gb",
              rom: "64gb",
              camera: "13",
              price: "22,000 PKR"
          },
          SamsungA20: {
              name: "Samsung A20",
              ram: "4gb",
              rom: "64gb",
              camera: "18",
              price: "28,000"
          },
          SamsungA30: {
              name: "Samsung A30",
              ram: "4gb",
              rom: "64gb",
              camera: "25",
              price: "29,000"
          }
      },
      IPhone: {
          IPhone11: {
              name: "IPhone11",
              ram: "4gb",
              rom: "64gb",
              camera: "12",
              price: "100,000"
          },
          IPhone12: {
              name: "IPhone12",
              ram: "4gb",
              rom: "64gb",
              camera: "12",
              price: "150,000"
          },
          IPhone13: {
              name: "IPhone13",
              ram: "6gb",
              rom: "128gb",
              camera: "24",
              price: "200,000"
          }
      },
      Oppo: {
          OppoV20: {
              name: "OppoV20",
              ram: "8gb",
              rom: "128gb",
              camera: "64",
              price: "54,999"
          },
          OppoF19: {
              name: "OppoF19",
              ram: "6gb",
              rom: "128gb",
              camera: "48",
              price: "36,999"
          },
          OppoF11: {
              name: "OppoF11",
              ram: "4gb",
              rom: "64gb",
              camera: "48",
              price: "35,999"
          }
      },
      Vivo: {
          VivoY20: {
              name: "VivoY20",
              ram: "4gb",
              rom: "64gb",
              camera: "13",
              price: "26,999"
          },
          VivoY21: {
              name: "VivoY21",
              ram: "4gb",
              rom: "64gb",
              camera: "13",
              price: "43,999"
          },
          VivoY55: {
              name: "VivoY55",
              ram: "8gb",
              rom: "128gb",
              camera: "50",
              price: "64,999"
          }
      }
  }
}

var brand = document.getElementById("brand");
var model = document.getElementById("model");

var allBrands = Object.keys(a['mobiles']);
console.log(allBrands);
for (var i = 0; i < allBrands.length; i++) {
  console.log(allBrands.length);
  brand.innerHTML += `<option>${allBrands[i]}</option>`;
}

function selectBrand() {
  var selectedBrand = brand.value;
  console.log(selectedBrand);
  // var allModels = a['mobiles'][selectedBrand];
  var allModels = Object.keys(a['mobiles'][selectedBrand])
  model.innerHTML = "";
  for (var i = 0; i < allModels.length; i++) {
    model.innerHTML += `<option value="${allModels[i]}">${allModels[i]}</option>`;
  }
}

function selectModel() {
 const selectedBrand = brand.value;
 const selectedMobile = model.value;
 if (selectedBrand && selectedMobile) 
 {
    const mobile = a.mobiles[selectedBrand][selectedMobile];
    const ram = mobile.ram;
    const rom = mobile.rom;
    specifications.innerText = `Selected Mobile:${selectedMobile},RAM: ${ram}, ROM: ${rom}`;
  }
}  


