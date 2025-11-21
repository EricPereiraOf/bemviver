body {
margin: 0;
font-family: Arial, sans-serif;
background: #f7f7f7;
}
header {
background: #4CAF50;
padding: 15px;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
}
nav a {
margin-left: 15px;
color: white;
text-decoration: none;
}
.hero {
text-align: center;
padding: 100px 20px;
background: linear-gradient(#4CAF50, #2E7D32);
color: white;
}
.btn {
display: inline-block;
padding: 12px 20px;
background: #333;
color: white;
text-decoration: none;
border-radius: 5px;
}
.produtos {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 20px;
}
.card {
background: white;
padding: 15px;
border-radius: 10px;
box-shadow: 0 3px 8px rgba(0,0,0,0.1);
}