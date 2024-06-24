import{_ as t,o as e,c as a,V as i}from"./chunks/framework.d800d183.js";const l="/documentation/airfoil/comparison_cl.png",y=JSON.parse('{"title":"Theoretical approach","description":"","frontmatter":{},"headers":[],"relativePath":"airfoil/theoretical-approach/index.md","filePath":"airfoil/theoretical-approach/index.md"}'),r={name:"airfoil/theoretical-approach/index.md"},o=i('<h1 id="theoretical-approach" tabindex="-1">Theoretical approach <a class="header-anchor" href="#theoretical-approach" aria-label="Permalink to &quot;Theoretical approach&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>Different approaches are used in order to analyse the airfoil. Two approaches are available in the tool:</p><ul><li>The Thin Airfoil Theory (<a href="./thin/">Thin Airfoil Theory</a>)</li><li>The Vortex Panel Method (<a href="./vortex-panel/">Vortex Panel Method</a>)</li></ul><h2 id="hypothesis" tabindex="-1">Hypothesis <a class="header-anchor" href="#hypothesis" aria-label="Permalink to &quot;Hypothesis&quot;">​</a></h2><p>The following hypothesis are made in order to analyse the airfoil:</p><ul><li>The flow is bidimensional</li><li>The flow is stationary</li><li>The flow is inviscid</li><li>Turbulent phenomena are not represented</li></ul><h2 id="validation" tabindex="-1">Validation <a class="header-anchor" href="#validation" aria-label="Permalink to &quot;Validation&quot;">​</a></h2><p>The results obtained for a NACA 0012 profil with the differents approches are compared with the results obtained with XFOIL and some experimental data.</p><p>The comparison is done for different angles of attack. The results are presented in the following graph:</p><p><img src="'+l+'" alt="Comparison"></p><details class="details custom-block"><summary>Table of the results</summary><table><thead><tr><th style="text-align:left;">Angle of attack</th><th style="text-align:right;">Thin Airfoil Theory</th><th style="text-align:right;">Vortex Panel Method</th><th style="text-align:right;">XFOIL</th><th style="text-align:right;">Experimental data</th></tr></thead><tbody><tr><td style="text-align:left;">0°</td><td style="text-align:right;">0.000</td><td style="text-align:right;">0.0014</td><td style="text-align:right;">0.0000</td><td style="text-align:right;">0.0603</td></tr><tr><td style="text-align:left;">5°</td><td style="text-align:right;">0.548</td><td style="text-align:right;">0.6027</td><td style="text-align:right;">0.6034</td><td style="text-align:right;">0.7400</td></tr><tr><td style="text-align:left;">8°</td><td style="text-align:right;">0.877</td><td style="text-align:right;">0.9559</td><td style="text-align:right;">0.9635</td><td style="text-align:right;">1.1873</td></tr><tr><td style="text-align:left;">10°</td><td style="text-align:right;">1.097</td><td style="text-align:right;">1.1858</td><td style="text-align:right;">1.2022</td><td style="text-align:right;">1.2707</td></tr><tr><td style="text-align:left;">12°</td><td style="text-align:right;">1.316</td><td style="text-align:right;">1.4099</td><td style="text-align:right;">1.4395</td><td style="text-align:right;">1.3887</td></tr><tr><td style="text-align:left;">15°</td><td style="text-align:right;">1.645</td><td style="text-align:right;">1.7329</td><td style="text-align:right;">1.7919</td><td style="text-align:right;">1.1701</td></tr></tbody></table></details><p>The results obtained with the tool are close to the results obtained with XFOIL and the experimental data. The differences are due to the assumptions made in the theoretical approaches. Our 2 approaches are validated for small angles of attack, inferior to the stall angle. The Vortex Panel Method is more accurate than the Thin Airfoil Theory.</p><div class="danger custom-block"><p class="custom-block-title">Limitations</p><p>The tool is not validated for angles of attack superior/close to the stall angle. Indeed, turbulent and viscous phenomena are not taken into account in the different theoretical approaches. Please consider the results obtained with the tool with caution.</p></div>',14),n=[o];function h(s,d,c,p,g,f){return e(),a("div",null,n)}const u=t(r,[["render",h]]);export{y as __pageData,u as default};