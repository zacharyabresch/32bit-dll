# 32bit-dll

This is the _simplest_ project possible that uses `ffi` to load the `VOClient` DLL. _All_ it does is load the DLL. It does not attempt to attach _any_ methods or functionality. It should either succeed or fail with an error.

## Setup

In order to run this project on a Windows machine, you will first need to setup your development environment. Here are the steps to do so (**warning**: This is _not_ an easy process and riddled with pitfalls. YMMV.):

* Install [Github Desktop][3]
  * This gives you Git Shell which should be used as a terminal from here on out
  * **All the following commands should be run from the Git Shell**
* Install [`nvm-windows`][1]
* Install the 32-bit version of `node`
  * `nvm install 6.9.2 32`
* Install the [Windows build tools][2]

## Usage

1. Clone this repository: `git clone git@github.com:zacharyabresch/32bit-dll.git`
2. `cd 32bit-dll`
3. `npm i`
4. Copy your version of `VOClient.dll` into the `c-libs` folder
4. `node ./index.js`

You should either see an error to the effect of: `Error %1 is not a valid Win32 application.` or perhaps `Error: Win32 error 193` or the word `success` printed to the console.


[1]:https://github.com/coreybutler/nvm-windows
[2]:https://github.com/felixrieseberg/windows-build-tools
[3]:https://desktop.github.com/
