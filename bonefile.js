var path = require('path');
var bone = require('bone');
var less = bone.require('bone-act-less');
var concat = bone.require('bone-act-concat');
var include = bone.require('bone-act-include');
var connect = require('bone-cli-connect');

bone.dest('dist')
    .src('~/src/**/!(*.html)')
    .act(include)
    .act(less({
        ieCompat: false
    }))
    .rename(function(fileName) {
        if (path.extname(fileName) == '.less') {
            return fileName.replace(/\.less$/, '.css');
        } else {
            return fileName;
        }
    });

bone.dest('')
	.src('~/src/*.html');


bone.cli(connect({
	base: '~/',
	livereload: true
}));

bone.cli(require('bone-cli-build')());