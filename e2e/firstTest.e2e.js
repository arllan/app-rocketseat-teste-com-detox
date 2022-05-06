describe('Example', () => {
  // inicia o emulador para antes dos teste o emulado está aberto com o app rodando
  beforeAll(async () => {
    await device.launchApp();
  });

  // antes de cada teste ele dá um reload no app para assim o app está se,pre iniciado do zero
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });
});
