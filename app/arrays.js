exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {

	var i=0,length=arr.length;
	for(i, length;i < length;i++){
		if (arr[i] === item) {
		return i;
		}
	}
	return -1;
  },

  sum : function(arr) {
	var i=0,length=arr.length,sum=0;
	for(i, length;i < length;i++){
	sum = sum+arr[i];
	}
	return sum;
  
  },

  remove : function(arr, item) {
	
	var i=0,length=arr.length;
	for(i, length;i < length;i++){
		if (arr[i] === item) {
			arr.splice(i,1);
		}
	}
	return arr;
  },

  removeWithoutCopy : function(arr, item) {
	//alert(item);
	var i=0,length=arr.length,sum=0;
	for(i, length;i < length;i++){
	if (arr[i] === item) {
			arr.splice(i,1);
			i=i-1;
			length = length - 1;
		}
	}
	//alert(arr);
	return arr;
	
  },

  append : function(arr, item) {

  arr.push(item);
  return arr;
  },

  truncate : function(arr) {
	arr.pop();
	return arr;
  },

  prepend : function(arr, item) {
	arr.unshift(item);
	return arr;
  },

  curtail : function(arr) {
	arr.shift();
	return arr;
  },

  concat : function(arr1, arr2) {
	
	var finalArr
	finalArr= arr1.concat(arr2);
	return finalArr;
  },

  insert : function(arr, item, index) {
	arr.splice(index,0,item);
	return arr;
  
  },

  count : function(arr, item) {

  	var i=0,length=arr.length,count=0;
	for(i, length;i < length;i++){
		if(arr[i] === item){
		count=count+1;
		}
	}
	return count;
  },

  duplicates : function(arr) {
	
	
	var duplicated =[];
	
	var arrOriginal =[],copyArr=[];
	
	arrOriginal = arr.sort();
	copyArr = arr.sort();
	
	var i=0,length=copyArr.length,count=0,copyArrlen=copyArr.length;
	for(i, length;i < length;i++){
		var count=0;
		
		for (var j = 0; j < length; j++) {
			if (arr[i] == copyArr[j]) {
				
				count++;
				
			}
		}
		if (count > 0 && arr[i]!==arr[i-1]) {
			
			duplicated.push(arr[i]);
			count=0;
		}
	
	}
	return duplicated;
	
  
  },

  square : function(arr) {
	var newArr=[];
	var i=0,length=arr.length,count=0;
	
	for(i, length;i < length;i++){
		newArr.push(arr[i]*arr[i]);
	}
	return newArr;
  },

  findAllOccurrences : function(arr, target) {
	var newArr=[];
	var i=0,length=arr.length,count=0;
	
	for(i, length;i < length;i++){
		if(arr[i] === target){
			newArr.push(i);
		}
	}
	return newArr;
  }
};
