<div id="content">
      <div class="paragraph">
        <p>
          In this task, your job will be to write a program that can decide
          whether two words are synonyms or not. You will get a synonym
          dictionary describing pairs of synonymous words. Afterwards, you will
          answer several queries asking whether given two words are synonyms or
          not. Both dictionary of synonym pairs and queries for your program
          will be included in the input file.
        </p>
      </div>
      <div class="paragraph">
        <p>Use the following rules to decide:</p>
      </div>
      <div class="olist arabic">
        <ol class="arabic">
          <li>
            <p>
              If the pair of words is declared synonymous in the input, then
              they are synonyms.
            </p>
          </li>
          <li>
            <p>
              Being synonyms doesn’t depend on order, e.g. if
              <em>big</em> is a synonym for <em>large</em> then
              <em>large</em> is a synonym for <em>big</em>.
            </p>
          </li>
          <li>
            <p>
              We can derive the synonymous relationship indirectly: if
              <em>big</em> is a synonym for <em>large</em> and <em>large</em> is
              a synonym for <em>huge</em> then <em>big</em> is a synonym for
              <em>huge</em>.
            </p>
          </li>
          <li>
            <p>
              If two words differ only by case, they are synonyms, e.g.
              <em>same</em> is a synonym for both <em>SAmE</em>,
              <em>SAME</em> and also <em>same</em> (itself).
            </p>
          </li>
          <li>
            <p>
              If none of the above rules can be used to decide whether two words
              are synonyms, then they are not.
            </p>
          </li>
        </ol>
      </div>
      <div class="paragraph">
        <p>
          Note, that the input size (see below) is quite low. Therefore, you
          don’t need to produce the most effective algorithm possible -
          sure, it’s nice if you do so, but <em>far</em> more important
          is, that your code is correct, and you deliver it on time.
        </p>
      </div>
      <div class="dlist">
        <dl>
          <dt class="hdlist1">Input</dt>
          <dd>
            <p>
              Input starts with a number of test cases <em>T</em> (0 ≤
              <em>T</em> ≤ 100). Each test case begins with a line containing a
              single number <em>N</em> (0 ≤ <em>N</em> ≤
              100)&thinsp;—&thinsp;the length of a synonym dictionary. On
              each of the following <em>N</em> lines, there is exactly one pair
              of synonyms separated by a single space. Next line contains a
              single number <em>Q</em> (0 ≤ <em>Q</em> ≤
              100)&thinsp;—&thinsp;number of queries. Each of the following
              lines contains a pair of query words separated by a single space.
            </p>
            <div class="paragraph">
              <p>
                Each word consists only of English alphabet letters
                (<code>[a-zA-Z]</code>) and is at most 20 characters long.
              </p>
            </div>
          </dd>
          <dt class="hdlist1">Output</dt>
          <dd>
            <p>
              For each pair of query words output either string
              <code>synonyms</code> or <code>different</code>.
            </p>
          </dd>
          <dt class="hdlist1">Sample input</dt>
        </dl>
      </div>
      <div class="listingblock">
        <div class="content">
          <pre class="highlight"><code>2
4
big large
large huge
small little
apple banana
6
same same
big huge
huge big
apple peach
big tall
peach PEACH
5
wood FORest
meadoW PrAirIe
WOOD Lumber
lumber forest
lumber forest
2
wood LUMBER
mEADOw fire</code></pre>
        </div>
      </div>
      <div class="dlist">
        <dl>
          <dt class="hdlist1">Sample output</dt>
        </dl>
      </div>
      <div class="listingblock">
        <div class="content">
          <pre class="highlight"><code>synonyms
synonyms
synonyms
different
different
synonyms
synonyms
different</code></pre>
        </div>
      </div>
      <div class="dlist">
        <dl>
          <dt class="hdlist1">Explanation of the sample problem</dt>
          <dd>
            <p>In the first test-case there are 6 queries:</p>
            <div class="olist arabic">
              <ol class="arabic">
                <li>
                  <p>Words are the same.</p>
                </li>
                <li>
                  <p>Words are derived synonyms.</p>
                </li>
                <li>
                  <p>Symmetric to 2nd query.</p>
                </li>
                <li>
                  <p>No rule can be used to derive the synonym pair.</p>
                </li>
                <li>
                  <p>
                    No rule can be used to derive the synonym pair, even though
                    they are synonyms in English.
                  </p>
                </li>
                <li>
                  <p>Words differ only in case.</p>
                </li>
              </ol>
            </div>
            <div class="paragraph">
              <p>2<sup>nd</sup> test case:</p>
            </div>
            <div class="olist arabic">
              <ol class="arabic">
                <li>
                  <p>
                    Defined as synonyms by 3rd rule. The case does not matter.
                  </p>
                </li>
                <li>
                  <p>Different.</p>
                </li>
              </ol>
            </div>
          </dd>
          <dt class="hdlist1">Example test file</dt>
          <dd>
            <p>
              For internal testing, you can download the example from above as a
              file:
            </p>
            <div class="ulist">
              <ul>
                <li>
                  <p>
                    <a href="https://drive.google.com/open?id=1uv7I0b3ToOvJ1L60yAanA4UrkGgwR2A7">example input</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://drive.google.com/open?id=1q4hAY6-MurTwb8-1chx9D5TAyd0VclmP">example output</a>
                  </p>
                </li>
              </ul>
            </div>
          </dd>
          <dt class="hdlist1">Bigger test file</dt>
          <dd>
            <p>
              This is still only an example for you to test internally,
              don’t submit this.
            </p>
            <div class="ulist">
              <ul>
                <li>
                  <p>
                    <a href="https://drive.google.com/open?id=1CTQZAeTsTJz4SCbzCmz2EaW4tJMGqCDJ">bigger example input</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://drive.google.com/open?id=19yn8CI2UqFfVrRVgtcFCE-ubatEp0Zpo">bigger example output</a>
                  </p>
                </li>
              </ul>
            </div>
          </dd>
        </dl>
      </div>
      <div class="dlist">
        <dl>
          <dt class="hdlist1">Your Goal</dt>
          <dd>
            <p>
              Solve the problem for this
              <a href="https://drive.google.com/open?id=14ad4U4Q82kmH5NBGG5nQhjntSQ2kzTGY">input file</a>
              and upload both the output file and all your source files.<br>
              In case you cannot download the file,
              <a href="https://support.google.com/drive/answer/2423534?hl=en-AU&amp;co=GENIE.Platform%3DDesktop#zippy=%2Cblocked-third-party-cookies-can-prevent-drive-web-downloads">enable third party cookies on your browser.</a>
            </p>
          </dd>
        </dl>
      </div>
    </div>