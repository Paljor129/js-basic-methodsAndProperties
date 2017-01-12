console.log('js');

// var writeHelloWorldInJs = function(nom) {
//   return 'document.write(\'hello '+ nom +')';
// }
//
// var writeHelloWorldInHtml = function(nom) {
//   return '<p>hello '+ nom +'</p>';
// }


var writeHelloWorldInJs = function() {
  return 'document.write(\'hello Michel\')';
}

var writeHelloWorldInHtml = function() {
  return '<p>hello Michel</p>';
}

var apprenant = {
  lastname: 'ABCD',
  firstname: 'Efgh',
  knowledges: {
    semanticUI: {
      type: 'css',
      name: 'Semantic UI',
      acquired: true,
      isAcquired: function() {
        return true;
      }
    },
    reactJS: {
      type: 'js',
      name: 'ReactJS',
      acquired: false,
      isAcquired: function() {
        return false;
      }
    }
  },
  writeCode: function(techno) {
    if(techno === 'js') {
      return writeHelloWorldInJs;
    } else if(techno === 'html') {
      return writeHelloWorldInHtml;
    }
  }
};

var firstName = apprenant.firstname;

console.log('firstName : ', firstName);

var semanticUIAcquired = apprenant.knowledges.semanticUI.acquired;

console.log('semanticUIAcquired :', semanticUIAcquired);

var semanticUIIsAcquired = apprenant.knowledges.semanticUI.isAcquired;

console.log('semanticUIIsAcquired : ', semanticUIIsAcquired() );

console.log('write code with HTML : ', apprenant.writeCode('html')() );

var sum = function(n1, n2) {
  return n1 + n2;
}

console.log(sum(3, 2) + sum(4, 2));
