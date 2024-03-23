beforeEach(() => {
    document.body.innerHTML = `
      <div id="display-affirm"></div>
      <button id="affirm-btn"></button>
    `;
  });
  
  describe('Affirmation Generator', () => {
    test('displays a random affirmation when the button is clicked', async () => {
      const { generateRandomAffirm } = await import('./affgen');
      generateRandomAffirm();
  
      const displayContent = document.getElementById('display-affirm').innerHTML;
      expect(displayContent).toContain('<h1>');
    });
      
  });
  