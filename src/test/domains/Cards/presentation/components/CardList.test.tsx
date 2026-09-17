import { describe, expect, it } from 'vitest';

import { CardList } from '@/domains/Cards/presentation/components/CardList/CardList';
import { renderWithProviders } from '@/test/helpers';

describe('CardList', () => {
  it('renders card names', () => {
    const { getByText } = renderWithProviders(
      <CardList
        cards={[
          {
            id: '1',
            name: 'Lightning Bolt',
            manaCost: '{R}',
            typeLine: 'Instant',
          },
        ]}
      />
    );

    expect(getByText('Lightning Bolt')).toBeInTheDocument();
    expect(getByText('{R}')).toBeInTheDocument();
  });
});
