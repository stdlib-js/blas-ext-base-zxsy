<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# zxsy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Subtract elements of a double-precision complex floating-point strided array `y` from the corresponding elements of a double-precision complex floating-point strided array `x` and assign the results to `y`.

<section class="intro">

This BLAS extension implements the operation

<!-- <equation class="equation" label="eq:xsy" align="center" raw="\mathbf{y} = \mathbf{x} - \mathbf{y}" alt="Equation for xsy operation."> -->

```math
\mathbf{y} = \mathbf{x} - \mathbf{y}
```

<!-- </equation> -->

This API is a specialized version of the package [`@stdlib/blas-ext/base/zaxpby`][@stdlib/blas/ext/base/zaxpby] with `α = 1` and `β = -1` and performs element-wise subtraction between two complex vectors.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-zxsy
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var zxsy = require( '@stdlib/blas-ext-base-zxsy' );
```

#### zxsy( N, x, strideX, y, strideY )

Subtracts elements of a double-precision complex floating-point strided array `y` from the corresponding elements of a double-precision complex floating-point strided array `x` and assigns the results to `y`.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, -2.0, 3.0, 4.0, -5.0, 6.0 ] );
var y = new Complex128Array( [ 2.0, 3.0, -4.0, 5.0, 6.0, -7.0 ] );

zxsy( x.length, x, 1, y, 1 );
// y => <Complex128Array>[ -1.0, -5.0, 7.0, -1.0, -11.0, 13.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: stride length for `x`.
-   **y**: output [`Complex128Array`][@stdlib/array/complex128].
-   **strideY**: stride length for `y`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to subtract every other element of `y` from every other element of `x`:

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, -2.0, 3.0, 4.0, 5.0, -6.0, 7.0, 8.0 ] );
var y = new Complex128Array( [ 7.0, 8.0, 9.0, -10.0, 11.0, 12.0, -13.0, 14.0 ] );

zxsy( 2, x, 2, y, 2 );
// y => <Complex128Array>[ -6.0, -10.0, 9.0, -10.0, -6.0, -18.0, -13.0, 14.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

// Initial arrays...
var x0 = new Complex128Array( [ 1.0, 0.0, 1.0, -2.0, 3.0, 4.0, -5.0, 6.0, 7.0, 8.0 ] );
var y0 = new Complex128Array( [ 7.0, 8.0, 9.0, 10.0, 2.0, 3.0, -4.0, 5.0, 6.0, -7.0 ] );

// Create offset views...
var x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Complex128Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

zxsy( 3, x1, 1, y1, 1 );
// y0 => <Complex128Array>[ 7.0, 8.0, 9.0, 10.0, -1.0, -5.0, 7.0, -1.0, -11.0, 13.0 ]
```

#### zxsy.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Subtracts elements of a double-precision complex floating-point strided array `y` from the corresponding elements of a double-precision complex floating-point strided array `x` and assigns the results to `y` using alternative indexing semantics.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, -2.0, 3.0, 4.0, -5.0, 6.0 ] );
var y = new Complex128Array( [ 2.0, 3.0, -4.0, 5.0, 6.0, -7.0 ] );

zxsy.ndarray( x.length, x, 1, 0, y, 1, 0 );
// y => <Complex128Array>[ -1.0, -5.0, 7.0, -1.0, -11.0, 13.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to subtract the last three elements of `y` from the last three elements of `x`:

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 1.0, -2.0, 3.0, 4.0, -5.0, 6.0 ] );
var y = new Complex128Array( [ 11.0, 12.0, 13.0, 14.0, 2.0, 3.0, -4.0, 5.0, 6.0, -7.0 ] );

zxsy.ndarray( 3, x, 1, x.length-3, y, 1, y.length-3 );
// y => <Complex128Array>[ 11.0, 12.0, 13.0, 14.0, -1.0, -5.0, 7.0, -1.0, -11.0, 13.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `y` unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var Complex128Array = require( '@stdlib/array-complex128' );
var logEach = require( '@stdlib/console-log-each' );
var zxsy = require( '@stdlib/blas-ext-base-zxsy' );

var xbuf = discreteUniform( 20, -100, 100, {
    'dtype': 'float64'
});
var ybuf = discreteUniform( 20, -100, 100, {
    'dtype': 'float64'
});
var x = new Complex128Array( xbuf.buffer );
var y = new Complex128Array( ybuf.buffer );

zxsy( x.length, x, 1, y, 1 );
logEach( '%s', y );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/zxsy.h"
```

#### stdlib_strided_zxsy( N, \*X, strideX, \*Y, strideY )

Subtracts elements of a double-precision complex floating-point strided array `y` from the corresponding elements of a double-precision complex floating-point strided array `x` and assigns the results to `y`.

```c
#include "stdlib/complex/float64/ctor.h"

const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 };
double y[] = { 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 };

stdlib_strided_zxsy( 3, (stdlib_complex128_t *)x, 1, (stdlib_complex128_t *)y, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] stdlib_complex128_t*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **Y**: `[inout] stdlib_complex128_t*` output array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.

```c
void stdlib_strided_zxsy( const CBLAS_INT N, const stdlib_complex128_t *X, const CBLAS_INT strideX, stdlib_complex128_t *Y, const CBLAS_INT strideY );
```

<!--lint disable maximum-heading-length-->

#### stdlib_strided_zxsy_ndarray( N, \*X, strideX, offsetX, \*Y, strideY, offsetY )

<!--lint enable maximum-heading-length-->

Subtracts elements of a double-precision complex floating-point strided array `y` from the corresponding elements of a double-precision complex floating-point strided array `x` and assigns the results to `y` using alternative indexing semantics.

```c
#include "stdlib/complex/float64/ctor.h"

const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 };
double y[] = { 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 };

stdlib_strided_zxsy_ndarray( 3, (stdlib_complex128_t *)x, 1, 0, (stdlib_complex128_t *)y, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] stdlib_complex128_t*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Y**: `[inout] stdlib_complex128_t*` output array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `Y`.

```c
void stdlib_strided_zxsy_ndarray( const CBLAS_INT N, const stdlib_complex128_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, stdlib_complex128_t *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/zxsy.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"
#include <stdio.h>

int main( void ) {
    // Create strided arrays:
    const stdlib_complex128_t x[] = {
        stdlib_complex128( 1.0, 2.0 ),
        stdlib_complex128( 3.0, 4.0 ),
        stdlib_complex128( 5.0, 6.0 ),
        stdlib_complex128( 7.0, 8.0 )
    };
    stdlib_complex128_t y[] = {
        stdlib_complex128( 2.0, 3.0 ),
        stdlib_complex128( 4.0, 5.0 ),
        stdlib_complex128( 6.0, 7.0 ),
        stdlib_complex128( 8.0, 9.0 )
    };

    // Specify the number of indexed elements:
    const int N = 4;

    // Specify strides:
    const int strideX = 1;
    const int strideY = 1;

    // Subtract `y` from `x` and assign the results to `y`:
    stdlib_strided_zxsy( N, x, strideX, y, strideY );

    // Print the result:
    for ( int i = 0; i < N; i++ ) {
        printf( "y[ %i ] = %lf + %lfi\n", i, stdlib_complex128_real( y[ i ] ), stdlib_complex128_imag( y[ i ] ) );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-zxsy.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-zxsy

[test-image]: https://github.com/stdlib-js/blas-ext-base-zxsy/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-zxsy/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-zxsy/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-zxsy?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-zxsy.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-zxsy/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-zxsy/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-zxsy/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-zxsy/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-zxsy/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-zxsy/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-zxsy/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-zxsy/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-zxsy/main/LICENSE

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

[@stdlib/blas/ext/base/zaxpby]: https://github.com/stdlib-js/blas-ext-base-zaxpby

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
