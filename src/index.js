
// import 'bootstrap'
// import 'bootstrap/scss/bootstrap.scss'
import 'jquery'
import './style.sass'
import './base.css'
import './index.pug'
import './components/project.pug'
import './components/accessions.pug'
import './components/create_task.pug'
import './components/last_tasks.pug'
import './js/modal/modal'

require.context("./img", true, /\.svg$/)

$( document ).ready( 
	$('#task1').modalWindow()


 )
// $('.overlooked').click(()=>{
// 	$('[data-done="overlooked"]').toggleClass('hidden')
// })
// $('.in_process').click(()=>{
// 	$('[data-done="in_process"]').toggleClass('hidden')
// })
// $('.to_view').click(()=>{
// 	$('[data-done="to_view"]').toggleClass('hidden')
// })


