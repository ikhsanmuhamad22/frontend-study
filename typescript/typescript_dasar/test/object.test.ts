describe('Object type', () => {
  it('should support in typescript', () => {
    const person: {id: string, name: string} = {
      id: '1',
      name: 'ikshan'
    }

    console.info(person)
  });
});