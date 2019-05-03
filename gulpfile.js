const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const htmlclean = require('gulp-htmlclean');

gulp.task('minify-html', () => {
    return gulp.src('./public/**/*.html')
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            collapseWhitespace: true,
            sortAttributes: true,
            sortClassName: true,
            processScripts: ["application/ld+json"],
            removeAttributeQuotes: true
        }))
        .pipe(htmlclean({
            unprotect: [
                /<script [^>]*\btype="text\/ls-javascript"[\s\S]+?<\/script>/ig,
                /<script [^>]*\btype="application\/ld\+json"[\s\S]+?<\/script>/ig,
            ]
        }))
        .pipe(gulp.dest('./public'))
});

gulp.task('default', gulp.parallel('minify-html'));