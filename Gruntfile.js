module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-jsdoc-to-markdown');
    grunt.loadNpmTasks('grunt-upcoming');

    grunt.initConfig({

        // used by the changelog task
        pkg: grunt.file.readJSON('package.json'),

        shell: {
            publish: {
                command: 'npm publish'
            },
            pubinit: {
                // command: 'npm publish --access public'
                command: [
                    'npm publish --access public',
                    'git tag v0.1.0',
                    'git push origin --tags',
                  ].join('&&')
            },
        },

        // To test: grunt bump --dry-run

        bump: {
            options: {

                commit: true,
                createTag: true,
                push: true,
                pushTo: 'origin',

                updateConfigs: ['pkg'],
                commitFiles: ['package.json']
            }
        },

        jsdoc2md: {
              oneOutputFile: {
                src: 'src/*.js',
                dest: 'DOC-API.md'
              }
        },

        upcoming: {
            default: {
                files: [
                    { src: 'package.json', dest: ['upcoming-info.json'] }
                ]
            }
        }

    });

    grunt.registerTask('default', ['upcoming:patch','build']);
    grunt.registerTask('build-doc', ['jsdoc2md']);
    grunt.registerTask("build",   ['build-doc']);
    grunt.registerTask('pubinit', ['build','shell:pubinit']);
    grunt.registerTask('publish', ['upcoming:patch','build','bump','shell:publish']);
    grunt.registerTask('pubminor', ['upcoming:minor','build','bump:minor','shell:publish']);
    grunt.registerTask('pubmajor', ['upcoming:major','build','bump:major','shell:publish']);
};