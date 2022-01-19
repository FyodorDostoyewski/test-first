import ResultBox from './ResultBox';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    const testCases = [
        { amount: 100 },
        { amount: 20 },
        { amount: 200 },
        { amount: 345 },
  ];

  for(const testObj of testCases) {
    render(<ResultBox from="PLN" to="USD" {...testObj} />);
  }
    });

  it('should render proper info about conversion when PLN -> USD', () => {
    render(<ResultBox from="PLN" to="USD" amount={100} />);
    const output = screen.getByTestId('output');
    expect(output).toHaveTextContent('PLN 100.00 = $28.57');
});
  it('should render proper info about conversion when USD -> PLN', () => {
    render(<ResultBox from="USD" to="PLN" amount={28.57} />);
    const output = screen.getByTestId('output');
    expect(output).toHaveTextContent('$28.57 = PLN 100.00');
});
  it('should return zero when input is lower than zero', () => {
    render(<ResultBox from="PLN" to="USD" amount={-1} />);
    const output = screen.getByTestId('output');
    expect(output).toHaveTextContent('Wrong value…');

});
});
