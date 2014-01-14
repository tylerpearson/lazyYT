module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*!\n' +
          '* <%= pkg.name %>\n' +
          '* v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
          '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>; Licensed <%= pkg.license %> %>\n' +
          '*/'
      },
      dist: {
        files: {
          '<%= pkg.name %>.min.js': '<%= pkg.name %>.js'
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', '<%= pkg.name %>.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          document: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint', 'uglify']);

};