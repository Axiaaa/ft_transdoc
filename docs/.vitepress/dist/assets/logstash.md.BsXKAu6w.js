import{_ as t,c as a,ae as e,o as i}from"./chunks/framework.Dp8IdPkr.js";const k=JSON.parse('{"title":"Logtstash","description":"","frontmatter":{},"headers":[],"relativePath":"logstash.md","filePath":"logstash.md"}'),n={name:"logstash.md"};function l(o,s,h,p,r,c){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="logtstash" tabindex="-1">Logtstash <a class="header-anchor" href="#logtstash" aria-label="Permalink to &quot;Logtstash&quot;">​</a></h1><p>Logstash is a application that allows you to collect, parse, and transform logs and other event data. It is a part of the ELK stack and is used to send data to Elasticsearch. In our project, Logstash is combined with Filebeat to collect logs from various services and send them to Elasticsearch.</p><hr><h3 id="let-s-take-a-look-at-our-configuration-file" tabindex="-1">Let&#39;s take a look at our configuration file: <a class="header-anchor" href="#let-s-take-a-look-at-our-configuration-file" aria-label="Permalink to &quot;Let&#39;s take a look at our configuration file:&quot;">​</a></h3><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Take input from Filebeat</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">input {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	beats {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		port =&gt; 5044</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		ssl_enabled =&gt; true</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		ssl_client_authentication =&gt; &quot;required&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		ssl_key =&gt; &quot;/usr/share/logstash/certs/logstash/logstash.key&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		ssl_certificate_authorities =&gt; [&quot;/usr/share/logstash/certs/ca/ca.crt&quot;]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		ssl_certificate =&gt; &quot;/usr/share/logstash/certs/logstash/logstash.crt&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#Output to Elasticsearch</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">output {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	elasticsearch {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		ssl_enabled =&gt; true</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		ssl_verification_mode =&gt; &quot;full&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		ssl_certificate_authorities =&gt; [&quot;/usr/share/logstash/certs/ca/ca.crt&quot;]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		user =&gt; &quot;elastic&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		index =&gt; &quot;%{[container][name]}-%{+YYYY.MM.dd}&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		hosts =&gt; [&quot;https://elasticsearch:9200&quot;]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		password =&gt; &quot;\${ELASTIC_PASSWORD}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>In the first part, we are taking input from Filebeat by listening on port 5044. We specify the SSL settings to ensure secure communication between Logstash and Filebeat. The <code>ssl_client_authentication</code> parameter is set to &quot;required&quot; to enforce client authentication.</p><p>For the <code>output</code> part, we are basically just sending the data to Elasticsearch. Again, we specify the SSL settings to ensure secure communication between Logstash and Elasticsearch. We use the <code>user</code> and <code>password</code> parameters to authenticate with Elasticsearch. We also use the <code>index</code> parameter to create daily indices based on the container name and the current date.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>As we are using SSL, the hostname for elastic will start with <code>https:</code>, and &quot;elasticsearch&quot; is the name of the service in the docker-compose.</p></div>`,8)]))}const u=t(n,[["render",l]]);export{k as __pageData,u as default};
