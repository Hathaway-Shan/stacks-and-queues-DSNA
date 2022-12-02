const { BinaryTreeNode, PersonTreeNode } = require('./index');

describe('node based data structures', () => {
  it('add function of BinaryTreeNode adds node correctly', () => {
    const B = new BinaryTreeNode('B');
    const A = new BinaryTreeNode('A');
    const C = new BinaryTreeNode('C');
    const D = new BinaryTreeNode('D');

    B.add(A);
    B.add(D);
    B.add(C);

    expect(B).toEqual({
      value: 'B',
      left: { value: 'A', left: null, right: null },
      right: {
        value: 'D',
        left: { value: 'C', left: null, right: null },
        right: null,
      },
    });
  });
  it('findPerson in PersonTreeNode finds correct person object', () => {
    const bill = {
      name: 'bill',
      phone: 1234,
      address: '111 street',
    };
    const ted = {
      name: 'ted',
      phone: 5678,
      address: '222 street',
    };
    const rufus = {
      name: 'rufus',
      phone: 9101112,
      address: '333 street',
    };
    const freud = {
      name: 'freud',
      phone: 131415,
      address: '444 street',
    };

    const Bill = new PersonTreeNode(bill);
    const Ted = new PersonTreeNode(ted);
    const Rufus = new PersonTreeNode(rufus);
    const Freud = new PersonTreeNode(freud);

    Ted.add(Bill);
    Ted.add(Rufus);
    Ted.add(Freud);

    const result = Ted.findPerson('rufus');

    expect(result).toEqual({
      name: 'rufus',
      phone: 9101112,
      address: '333 street',
    });
  });
});
