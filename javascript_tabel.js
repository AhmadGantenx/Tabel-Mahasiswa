function terimainput(){
	var x=document.forms["biodata"]["npm"].value;
	var y=document.forms["biodata"]["nama"].value;
	var z=document.forms["biodata"]["tempat lahir"].value;
	var a=document.forms["biodata"]["tanggal lahir"].value;
	var b=document.forms["biodata"]["alamat"].value;
	var c=document.forms["biodata"]["email"].value;
	
	var tabel= document.getElementById("tabelinput");
	var row= tabel.insertRow(1);
	var cell1= row.insertCell(0);
	var cell2= row.insertCell(1);
	var cell3= row.insertCell(2);
	var cell4= row.insertCell(3);
	var cell5= row.insertCell(4);
	var cell6= row.insertCell(5);
	
	cell1.innerHTML= x;
	cell2.innerHTML= y;
	cell3.innerHTML= z;
	cell4.innerHTML= a;
	cell5.innerHTML= b;
	cell6.innerHTML= c;
}

document.getElementById("tabelinput").addEventListener("click",function(){
    alert("Data Anda Sudah Disimpan");
});