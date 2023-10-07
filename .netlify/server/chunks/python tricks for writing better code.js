import { c as create_ssr_component } from './ssr.js';
const metadata = {
	title: '11 Python tips and tricks to make you a better programmer',
	author: 'Ronald Otieno',
	date: '2023-10-01T00:00:00.000Z',
	layout: 'blog',
	published: true,
	excerpt:
		'Here are some python skills that will help you write better programs and code efficient algorithims.'
};
const Pythonu20tricksu20foru20writingu20betteru20code = create_ssr_component(
	($$result, $$props, $$bindings, slots) => {
		return `<h2 id="ternary-operators" data-svelte-h="svelte-esxu9t">Ternary operators</h2> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">condition </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">True</span></span>
<span class="line"><span style="color: #F92672">if</span><span style="color: #F8F8F2"> condition:</span></span>
<span class="line"><span style="color: #F8F8F2">    x</span><span style="color: #F92672">=</span><span style="color: #AE81FF">1</span></span>
<span class="line"><span style="color: #F92672">else</span><span style="color: #F8F8F2">:</span></span>
<span class="line"><span style="color: #F8F8F2">    x</span><span style="color: #F92672">=</span><span style="color: #F8F8F2">o</span></span>
<span class="line"></span>
<span class="line"><span style="color: #66D9EF">print</span><span style="color: #F8F8F2">(x)</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-zb97lf">the shorthand;</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">x </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2"> </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> condition </span><span style="color: #F92672">else</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">0</span></span></code></pre>`}<!-- HTML_TAG_END --> <h2 id="improve-readability-of-long-numbers" data-svelte-h="svelte-1izs7o6">Improve readability of long numbers</h2> <p data-svelte-h="svelte-1sr1dmn">On paper you can use comma(,) but not in python.
In python you can use underscores(_) as separator.</p> <p data-svelte-h="svelte-1y1p9o8">This will save you from making mistakes when editing numbers.</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">num1 </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">10_000_000_000</span></span>
<span class="line"><span style="color: #F8F8F2">num2 </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">100_000_000</span></span>
<span class="line"><span style="color: #F8F8F2">total </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> num1 </span><span style="color: #F92672">+</span><span style="color: #F8F8F2"> num2</span></span>
<span class="line"><span style="color: #66D9EF">print</span><span style="color: #F8F8F2">(total)</span></span>
<span class="line"></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-omql2l">To add the separator to our output we can use python’s string formatting (f string).</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F92672">//</span><span style="color: #F8F8F2">num1 </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">10_000_000_000</span></span>
<span class="line"><span style="color: #F92672">//</span><span style="color: #F8F8F2">num2 </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">100_000_000</span></span>
<span class="line"><span style="color: #F92672">//</span><span style="color: #F8F8F2">total </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> num1 </span><span style="color: #F92672">+</span><span style="color: #F8F8F2"> num2</span></span>
<span class="line"><span style="color: #66D9EF">print</span><span style="color: #F8F8F2">(</span><span style="color: #66D9EF; font-style: italic">f</span><span style="color: #E6DB74">&#39;</span><span style="color: #AE81FF">&#123;</span><span style="color: #F8F8F2">total</span><span style="color: #66D9EF; font-style: italic">:,</span><span style="color: #AE81FF">&#125;</span><span style="color: #E6DB74">&#39;</span><span style="color: #F8F8F2">)</span></span></code></pre>`}<!-- HTML_TAG_END --> <h2 id="proper-way-of-handling-files" data-svelte-h="svelte-1wugg1w">Proper way of handling files</h2> <p data-svelte-h="svelte-ukln16">When reading from a file in python it is necessary to close it after you’re done with it to free resources for other processes.</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">f </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">open</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;textFile.txt&#39;</span><span style="color: #F8F8F2">, r)</span></span>
<span class="line"><span style="color: #F8F8F2">file_contents </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> f.read()</span></span>
<span class="line"><span style="color: #F8F8F2">f.close() </span><span style="color: #88846F"># closing the file</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">words </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> file_contents.split(</span><span style="color: #E6DB74">&#39; &#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">word_count </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">len</span><span style="color: #F8F8F2">(words)</span></span>
<span class="line"><span style="color: #66D9EF">print</span><span style="color: #F8F8F2">(word_count)</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-1lvzuoh">It is easy to forget to close a file and this can lead to memory leaks in your program.
An easier way of handling files is by using context manager.
Context managers are meant to manage resource for you so you don’t have to remember to manage them yourself.</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F92672">with</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">open</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;test_file.txt&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;r&#39;</span><span style="color: #F8F8F2">) </span><span style="color: #F92672">as</span><span style="color: #F8F8F2"> f:</span></span>
<span class="line"><span style="color: #F8F8F2">    file_contents </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> f.read()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">words </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> file_contents.split(</span><span style="color: #E6DB74">&#39; &#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">word_count </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">len</span><span style="color: #F8F8F2">(words)</span></span>
<span class="line"><span style="color: #66D9EF">print</span><span style="color: #F8F8F2">(word_count)</span></span>
<span class="line"></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-k8n68w">Now you don’t need to manually close downt the file because the contex manager will manage resources automatically.</p> <h2 id="use-enumerate-function-when-you-need-a-counter-while-looping-over-something" data-svelte-h="svelte-b31u0t">Use enumerate function when you need a counter while looping over something</h2> <p data-svelte-h="svelte-1ix64hl">Instead of this,</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">players </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> [</span><span style="color: #E6DB74">&#39;Saka&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;Martinelli&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;Saliba&#39;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">index </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">0</span></span>
<span class="line"><span style="color: #F92672">for</span><span style="color: #F8F8F2"> player </span><span style="color: #F92672">in</span><span style="color: #F8F8F2"> players:</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF">print</span><span style="color: #F8F8F2">(index, player)</span></span>
<span class="line"><span style="color: #F8F8F2">    index </span><span style="color: #F92672">+=</span><span style="color: #AE81FF">1</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-1o70egw">You can write it cleaner like this,</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">players </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> [</span><span style="color: #E6DB74">&#39;Saka&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;Martinelli&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;Saliba&#39;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F92672">for</span><span style="color: #F8F8F2"> index, player </span><span style="color: #F92672">in</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">enumerate</span><span style="color: #F8F8F2">(players):</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF">print</span><span style="color: #F8F8F2">(index, player)</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-i0hwv">and it will produce the same result as before.</p> <p data-svelte-h="svelte-1he51nb">You can also pass a start value if you don’t want to start at zero.</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">players </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> [</span><span style="color: #E6DB74">&#39;Saka&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;Martinelli&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;Saliba&#39;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F92672">for</span><span style="color: #F8F8F2"> index, player </span><span style="color: #F92672">in</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">enumerate</span><span style="color: #F8F8F2">(players, </span><span style="color: #FD971F; font-style: italic">start</span><span style="color: #F92672">=</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">):</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF">print</span><span style="color: #F8F8F2">(index, player)</span></span></code></pre>`}<!-- HTML_TAG_END --> <h2 id="looping-over-two-lists-at-once" data-svelte-h="svelte-vdyrxn">Looping over two lists at once</h2> <p data-svelte-h="svelte-zso7hq">Let’s say the first list contains first names of people and the second list contains their second names.
And you want to write a function that joins the two names of each person
We can make use of the zip function.</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">first_name </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> [</span><span style="color: #E6DB74">&#39;Bukayo&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;Gabriel&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;William&#39;</span><span style="color: #F8F8F2">,]</span></span>
<span class="line"><span style="color: #F8F8F2">second_name </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> [</span><span style="color: #E6DB74">&#39;Saka&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;Martinelli&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;Saliba&#39;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F92672">for</span><span style="color: #F8F8F2"> a, b </span><span style="color: #F92672">in</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">zip</span><span style="color: #F8F8F2">(first_name, second_name):</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF">print</span><span style="color: #F8F8F2">(</span><span style="color: #66D9EF; font-style: italic">f</span><span style="color: #E6DB74">&#39;</span><span style="color: #AE81FF">&#123;</span><span style="color: #F8F8F2">a</span><span style="color: #AE81FF">&#125;</span><span style="color: #E6DB74"> </span><span style="color: #AE81FF">&#123;</span><span style="color: #F8F8F2">b</span><span style="color: #AE81FF">&#125;</span><span style="color: #E6DB74">&#39;</span><span style="color: #F8F8F2">)</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-zxjnbw">Zip can also be used for more than two lists.</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">first_name </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> [</span><span style="color: #E6DB74">&#39;Bukayo&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;Gabriel&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;William&#39;</span><span style="color: #F8F8F2">,]</span></span>
<span class="line"><span style="color: #F8F8F2">second_name </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> [</span><span style="color: #E6DB74">&#39;Saka&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;Martinelli&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;Saliba&#39;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"><span style="color: #F8F8F2">position </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> [</span><span style="color: #E6DB74">&#39;winger&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;winger&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;Defender&#39;</span><span style="color: #F8F8F2">]</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F92672">for</span><span style="color: #F8F8F2"> a, b,c </span><span style="color: #F92672">in</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">zip</span><span style="color: #F8F8F2">(first_name, second_name, position):</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #66D9EF">print</span><span style="color: #F8F8F2">(</span><span style="color: #66D9EF; font-style: italic">f</span><span style="color: #E6DB74">&#39;</span><span style="color: #AE81FF">&#123;</span><span style="color: #F8F8F2">a</span><span style="color: #AE81FF">&#125;</span><span style="color: #E6DB74"> </span><span style="color: #AE81FF">&#123;</span><span style="color: #F8F8F2">b</span><span style="color: #AE81FF">&#125;</span><span style="color: #E6DB74"> -&gt; </span><span style="color: #AE81FF">&#123;</span><span style="color: #F8F8F2">c</span><span style="color: #AE81FF">&#125;</span><span style="color: #E6DB74">&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-17xgvxh">Zip works by returning a tuple of the three list we provide it with. All we are doing is just unpacking with the variables <code>a, b, c</code>.
This is similar to JavaScript’s object destructuring.</p> <p data-svelte-h="svelte-132trb">If you use lists with different lengths, zip will terminate at the list with the shortest length.</p> <h2 id="use-underscore-for-unused-varibles" data-svelte-h="svelte-bbdkgi">Use underscore for unused varibles</h2> <p data-svelte-h="svelte-1njyr06">For example you are unpacking values from a tuple or list and you are plannig to use only one, you can use underscore to represent the value that you don’t intend to use.</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">numbers </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> (</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">2</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">a, _ </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> numbers</span></span>
<span class="line"><span style="color: #66D9EF">print</span><span style="color: #F8F8F2">(a)</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-1s1qjk9">This is usefull for preventing errors that IDEs throw when you declare variables that you don’t use.</p> <h2 id="upacking-longer-values" data-svelte-h="svelte-115cwa4">Upacking longer values</h2> <p data-svelte-h="svelte-165cj2y">When you’re unpacking a tuple or list of even longers values, it might be tedious or impossible to match every value to a variable because sometimes you don’t know in advance how many items it contains.</p> <p data-svelte-h="svelte-uc4kqg">In this example, you’re upacking many numbers but you only need the first two.
You can use asterisk and underscore to ignore the rest of the values after unpacking the first two.</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">numbers </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> (</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">2</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">3</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">4</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">5</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">6</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">7</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">8</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">a, b, </span><span style="color: #F92672">*</span><span style="color: #F8F8F2">_ </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> (numbers)</span></span>
<span class="line"><span style="color: #66D9EF">print</span><span style="color: #F8F8F2">(a,b) </span><span style="color: #88846F"># 1 2</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-1d9g155">You can also add an asterisk and an additional variable to set the rest of the remaining values to it.</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">numbers </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> (</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">2</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">3</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">4</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">5</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">6</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">7</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">8</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">a, b, </span><span style="color: #F92672">*</span><span style="color: #F8F8F2">c </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> (numbers)</span></span>
<span class="line"><span style="color: #66D9EF">print</span><span style="color: #F8F8F2">(a,b,c) </span><span style="color: #88846F"># 1 2 [3,4,5,6,7,8]</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-1hthu5a">After <code>a</code> and <code>b</code> are set to <code>1</code> and <code>2</code>, the rest of the values will be set to <code>c</code>.</p> <h2 id="unpacking-and-grabbing-the-last-value" data-svelte-h="svelte-1q1ocul">Unpacking and grabbing the last value</h2> <p data-svelte-h="svelte-kxzozu">This upacking technique works similarly to the previous ones with the only difference being that we can set some values to variables or ignore them, then set the last value of a list to it’s own variable.</p> <p data-svelte-h="svelte-l590x">After <code>a,b,d</code> are set to <code>1,2,8</code>, the rest of the values are set to <code>c</code>.</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">numbers </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> (</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">2</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">3</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">4</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">5</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">6</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">7</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">8</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">a, b, </span><span style="color: #F92672">*</span><span style="color: #F8F8F2">c, d </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> (numbers)</span></span>
<span class="line"><span style="color: #66D9EF">print</span><span style="color: #F8F8F2">(a,b,c,d)</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-10akypu">After <code>a,b,d</code> are set to <code>1,2,8</code>, the rest of the values are ignored.</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">numbers </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> (</span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">2</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">3</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">4</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">5</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">6</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">7</span><span style="color: #F8F8F2">,</span><span style="color: #AE81FF">8</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">a, b, </span><span style="color: #F92672">*</span><span style="color: #F8F8F2">_, d </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> (numbers)</span></span>
<span class="line"><span style="color: #66D9EF">print</span><span style="color: #F8F8F2">(a,b,d)</span></span></code></pre>`}<!-- HTML_TAG_END --> <h2 id="getting-and-setting-setting-attributes-on-empty-objects" data-svelte-h="svelte-a7u4hn">Getting and setting setting attributes on empty objects</h2> <p data-svelte-h="svelte-ooixpf">Make use of <code>setattr</code> to set attributes of an object to avoid naming conflicts in cases where varible names are similar to attribute names of that object.</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #66D9EF; font-style: italic">class</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E; text-decoration: underline">Person</span><span style="color: #F8F8F2">():</span></span>
<span class="line"><span style="color: #F8F8F2">    person</span></span>
<span class="line"><span style="color: #F8F8F2">person </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> Person()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">first_key </span><span style="color: #F92672">=</span><span style="color: #E6DB74">&#39;first&#39;</span></span>
<span class="line"><span style="color: #F8F8F2">first_value </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;White&#39;</span></span>
<span class="line"><span style="color: #66D9EF">setattr</span><span style="color: #F8F8F2">(person, first_key, first_val)</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-1k5eqw1">This function takes <code>object</code>, <code>key</code> and <code>value</code> arguments.</p> <p data-svelte-h="svelte-1i6hnte">And in order to get attributes, use <code>getattr()</code> function.</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">first </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">getattr</span><span style="color: #F8F8F2">(person, first_key)</span></span>
<span class="line"><span style="color: #66D9EF">print</span><span style="color: #F8F8F2">(first)</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-3b7he6">This will print out the value of the given attribute.</p> <h2 id="inputing-secret-information" data-svelte-h="svelte-nhe46g">Inputing secret information</h2> <p data-svelte-h="svelte-o9581k">It always recommended to store sensitive informatin in enviroment variables, but what if you need to type something like a password.
Function has a function just for this and it is called <code>getpass</code> from the getpass module.
It is standard library so you don’t need to install anything.
You can use it by importing it, <code>from getpass import getpass</code>
To use it,</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F92672">from</span><span style="color: #F8F8F2"> getpass </span><span style="color: #F92672">import</span><span style="color: #F8F8F2"> getpass</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">username </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #66D9EF">input</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;Username: &#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"><span style="color: #F8F8F2">password </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> getpass(</span><span style="color: #E6DB74">&#39;Password: &#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #66D9EF">print</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;Loging in...&#39;</span><span style="color: #F8F8F2">)</span></span>
<span class="line"></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-xfn4ix">When you type your username it will be visible but when you type your password nothing can be seen.
This is more secure.</p> <h2 id="getting-help" data-svelte-h="svelte-1043f8q">Getting help()</h2> <p data-svelte-h="svelte-prwc0k">If you are stuck and don’t know what a certain module, keyword or function does, you can open python and terminal and run the <code>help()</code> function with the module or function as argument.
To open python commandline, open your terminal emulator, type <code>python</code> and press enter.
For example to get help on what the <code>math</code> module does, <code>help(&#39;math&#39;)</code></p>`;
	}
);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(
	/* @__PURE__ */ Object.defineProperty(
		{
			__proto__: null,
			default: Pythonu20tricksu20foru20writingu20betteru20code,
			metadata
		},
		Symbol.toStringTag,
		{ value: 'Module' }
	)
);
export { __vite_glob_0_5 as _ };
