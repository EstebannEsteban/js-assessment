exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {

  },

  speak : function(fn, obj) {
	return fn.call(obj);
  },

  functionFunction : function(str) {
	return function(arg) {
      return str + ', ' + arg;
    };
  },

  makeClosures : function(arr, fn) {
	
  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
