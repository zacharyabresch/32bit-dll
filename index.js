var ffi = require('ffi');
var path = require('path');

/**
  * @constant {string} RTLD_NOW - `ffi` flag that determines if `dlopen`
  * operates such that all necessary relocations shall be performed when
  * the object is first loaded.
  * [ref](http://pubs.opengroup.org/onlinepubs/009695399/functions/dlopen.html)
  */
var RTLD_NOW = ffi.DynamicLibrary.FLAGS.RTLD_NOW;
/**
  * @constant {string} RTLD_GLOBAL - `ffi` flag that determines if `dlopen`
  * operates such that The object's symbols shall be made available for the
  * relocation processing of any other object.
  * [ref](http://pubs.opengroup.org/onlinepubs/009695399/functions/dlopen.html)
  */
var RTLD_GLOBAL = ffi.DynamicLibrary.FLAGS.RTLD_GLOBAL;
/**
  * @constant {string} MODE - Determines the `dlopen` mode obtained from `ffi`.
  */
var MODE = RTLD_NOW || RTLD_GLOBAL;

var libPath = path.resolve(__dirname, 'c-libs/VOClient_orig_32.dll');

console.log(libPath);
var dynamicLibrary = ffi.DynamicLibrary(libPath, MODE);
