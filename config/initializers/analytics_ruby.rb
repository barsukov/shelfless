require 'segment/analytics'

Analytics = Segment::Analytics.new({
    write_key: 'G1ahMGKtNgyUA2infc4cFC6DI0P8lpPc',
    on_error: Proc.new { |status, msg| print msg }
})
