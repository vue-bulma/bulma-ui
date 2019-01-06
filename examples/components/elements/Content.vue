<template>
  <vb-section>
    <example-section-item title="Attribute value type">
      <demo>
        <vb-content>
          <ol type="1">
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ol>
          <ol type="A">
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ol>
          <ol type="a">
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ol>
          <ol type="I">
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ol>
          <ol type="i">
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ol>
        </vb-content>
        <pre slot="code">{{code.type}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="CSS modifier classes">
      <demo>
        <vb-content>
          <ol class="is-lower-alpha">
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ol>
          <ol class="is-lower-roman">
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ol>
          <ol class="is-upper-alpha">
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ol>
          <ol class="is-upper-alpha">
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ol>
        </vb-content>
        <pre slot="code">{{code.modifier}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Basic">
      <demo>
        <vb-content>
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel,
            interdum mattis neque.
          </p>
          <h2>Second level</h2>
          <p>
            Curabitur accumsan turpis pharetra
            <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus
            dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
          </p>
          <ul>
            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
            <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
            <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
            <li>Ut non enim metus.</li>
          </ul>
        </vb-content>
        <pre slot="code">{{code.basic}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Size">
      <demo>
        <vb-content size="small">
          <h1>Small</h1>
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel,
            interdum mattis neque.
          </p>
          <h2>Second level</h2>
          <p>
            Curabitur accumsan turpis pharetra
            <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus
            dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
          </p>
          <ul>
            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
            <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
            <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
            <li>Ut non enim metus.</li>
          </ul>
        </vb-content>
        <pre slot="code">{{code.sizeSmall}}</pre>
      </demo>
      <demo>
        <vb-content>
          <h1>Normal</h1>
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel,
            interdum mattis neque.
          </p>
          <h2>Second level</h2>
          <p>
            Curabitur accumsan turpis pharetra
            <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus
            dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
          </p>
          <ul>
            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
            <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
            <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
            <li>Ut non enim metus.</li>
          </ul>
        </vb-content>
        <pre slot="code">{{code.sizeNormal}}</pre>
      </demo>
      <demo>
        <vb-content size="medium">
          <h1>Medium</h1>
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel,
            interdum mattis neque.
          </p>
          <h2>Second level</h2>
          <p>
            Curabitur accumsan turpis pharetra
            <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus
            dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
          </p>
          <ul>
            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
            <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
            <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
            <li>Ut non enim metus.</li>
          </ul>
        </vb-content>
        <pre slot="code">{{code.sizeMedium}}</pre>
      </demo>
      <demo>
        <vb-content size="large">
          <h1>Large</h1>
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel,
            interdum mattis neque.
          </p>
          <h2>Second level</h2>
          <p>
            Curabitur accumsan turpis pharetra
            <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus
            dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
          </p>
          <ul>
            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
            <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
            <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
            <li>Ut non enim metus.</li>
          </ul>
        </vb-content>
        <pre slot="code">{{code.sizeLarge}}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@examples/code/elements/content.js'

export default {
  name: 'ContentExamples',
  data() {
    return {
      code
    }
  }
}
</script>
