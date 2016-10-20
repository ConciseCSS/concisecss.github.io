desc('Compile Pug files.')
task('pug', () => {
  jake.exec('pug src/ --out . -w --obj src/_data.json', {
    printStdout: true,
    printStderr: true
  }, () => {
    complete()
  })
})

desc('Compile the files of Concise Framework.')
task('concise', () => {
  jake.exec('concisecss compile src/styles/main.scss styles/main.css', {
    printStdout: true,
    printStderr: true
  }, () => {
    complete()
  })
})

desc('Compile styles on file changes')
task('concise:watch', () => {
  jake.exec('chokidar "src/styles/**/*.scss" -c "jake concise"', {
    printStdout: true,
    printStderr: true
  }, () => {
    complete()
  })
})

desc('Start livereload server.')
task('livereload', () => {
  jake.exec('livereload . -e "js, html, css"', {
    printStdout: true,
    printStderr: true
  }, () => {
    complete()
  })
})

desc('Start HTTP server.')
task('http', () => {
  jake.exec('http-server .', {
    printStdout: true,
    printStderr: true
  }, () => {
    complete()
  })
})

desc('Start the development services.')
task('default', () => {
  jake.Task['concise'].invoke()
  jake.Task['pug'].invoke()
  jake.Task['concise:watch'].invoke()
  jake.Task['http'].invoke()
  jake.Task['livereload'].invoke()
})
