let sentence = ['Hello','my','name','is','Rijaal']

let greeting = document.getElementById('para')

for(i=0;i<sentence.length;i++){
    greeting.textContent +=sentence[i] +' '
}