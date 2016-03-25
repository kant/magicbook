var _ = require('lodash');
var vfs = require('vinyl-fs');
var gutil = require('gulp-util');

// through2 function to convert a scss file to css
// Returns: Vinyl filestream
function scss() {
  return through.obj(function (file, enc, cb) {
    if(isScss(file)) {
      sass.render({ file: file.path }, function(err, result) {
        file.contents = result.css;
        file.path = gutil.replaceExtension(file.path, '.css');
        cb(err, result);
      });
    } else {
      cb(null, file);
    }
	});
}
/*
module.exports = {

  setup: function(format, config, md, cb) {

    // get the stylesheets needed for this format
    var stylesheets = _.get(config, "stylesheets.files");

    // if the array exists
    if(stylesheets) {

      //var stream = vfs.src(stylesheets)
      //  .pipe(scss());

      // compress

      // digest
      //if(_.)

      // bundle (use filename if not true)

      // finish
      // stream
      //   .pipe(vfs.dest(destination(formatConfig, format)))
      //   .on('finish', function() {
      //     cb(null);
      //   });

    } else {
      cb(null);
    }
  }

}*/


// find the stylesheets for this format
/*var stylesheets = _.get(config, "formats." + format + ".stylesheets") || config.stylesheets;
var css = [];
if(_.isArray(stylesheets)) {
  css = _.map(stylesheets, function(stylesheet) {
    if(!cssCache[stylesheet]) {

      // find the format build folder
      var dest = destination(config, format);

      // rename the file to css (some files can be scss)
      var outFile = path.basename(gutil.replaceExtension(stylesheet, '.css'));

      // find the exact assetfolder name inside the format build folder
      var outPath = path.join(dest, assetFolder, outFile);

      if(isScssFile(file.path)) {
        cssCache[stylesheet] = sass.renderSync({
          file: stylesheet,
          outFile: outPath
        });
      }

    }

  });
}*/

// Filter to take a string with the filename of a scss file in
// the stylesheets folder, and create a css file from it and
// return the new name.
/*css : function(src, cb, context) {
  var inFile = context._locals.stylesheets + "/" + src + ".scss";
  if(!cssCache[inFile]) {
    var dest = destination(context._locals, context._locals.format);
    var outFile = dest + "/" + assetFolder + "/" + src + ".css";
    sass.renderSync({
        file: inFile,
        outFile: outFile
      },
      function(err, result) {
        if(err) return console.log("Error compiling sass", err);
        createFile(outFile, result.css, function() {
          cssCache[inFile] = path.relative(dest, outFile);
          cb(null, cssCache[inFile]);
        });
      }
    );
  }
  else {
    cb(null, cssCache[inFile]);
  }
}*/
