var gulp = require( 'gulp' ),
    browserify = require( 'browserify' ),
    stringToStream = require( 'string-to-stream' ),
    tsify = require( 'tsify' );

gulp.task('default', compile );

function compile ()
{
    var b = browserify({
        entries: './src/app.ts'
    });

    b.plugin(tsify)
        .exclude('logModule')
        .require( logModule(), { expose: 'logModule' });

    b.bundle();

}

function logModule() {
    return stringToStream('console.log( \'run\' )');
}